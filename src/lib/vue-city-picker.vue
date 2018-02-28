<template>
    <div class="vue-city-picker-container">
        <div class="ls-picker-container" @click.self="showPanel">
            <span class="value" :class="{ 'place-holder' : placeholderShow }">{{ placeholderShow ? placeholder : label }}</span>
            <span class="iconfont" :class=" show ? 'icon-arrowdown' : 'icon-arrowup'"></span>
            <div class="area-box" v-clickoutside="ousideClick" v-if="show">
                <Spin fix v-show="ajaxLoad">加载中...</Spin>
                <div class="tabs">
                    <span v-for="(tab,i) in tabs" :key="i" :class="{ 'active': i == activeTab }" v-show="tab.data.length > 0" @click="switchTab(i)">{{ tab.label }}</span>
                </div>
                <div class="items-contnet">
                    <span class="item" :class="{ 'active': activeItem.active == j }" v-for="(item,j) in activeItem.data" :key="item.id" @click="pick(j)">{{ item.shortName }}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'vue-city-picker',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        directives: {
            'clickoutside': {
                bind(el, binding, vnode) {
                    function documentHandler(e) {
                        if (el.contains(e.target)) {
                            return false;
                        }
                        if (binding.expression) {
                            binding.value(e);
                        }
                    }
                    el.__vueClickOutside__ = documentHandler;
                    document.addEventListener('click', documentHandler);
                },
                unbind(el, binding) {
                    document.removeEventListener('click', el.__vueClickOutside__);
                    delete el.__vueClickOutside__;
                }
            }
        },
        data() {
            return {
                tabs: [{
                        label: '请选择',
                        api: 'G_getProvince',
                        active: null,
                        data: []
                    },
                    {
                        label: '请选择',
                        api: 'G_getCity',
                        active: null,
                        data: []
                    },
                    {
                        label: '请选择',
                        api: 'G_getDistrict',
                        active: null,
                        data: []
                    }
                ],
                activeTab: 0,
                results: [],
                ajaxLoad: false,
                show: false
            }
        },
        computed: {
            activeItem() {
                return this.tabs[this.activeTab];
            },
            collectResults() {
                let i = this.activeTab,
                    arr = [];
                this.tabs.forEach((tab, j) => {
                    if (j <= i) {
                        arr.push({
                            id: tab.data[tab.active].id,
                            name: tab.data[tab.active].shortName
                        });
                    }
                });
                return this.$clearData(arr)
            },
            label() {
                let str = '',
                    le = this.results.length;
                this.results.forEach((item, i) => {
                    // 是否是最后一项
                    let isLast = i == (le - 1);
                    str += isLast ? item.name : `${item.name} `;
                })
                return str
            },
            // 是否显示placeHolder
            placeholderShow() {
                return this.results.length <= 0
            }
        },
        watch: {
            results(val) {
                this.$emit('input', val)
            },
            show(val) {
                // 减少对服务器的请求
                if (val && this.activeTab === 0 && this.activeItem.data.length <= 0)
                    this.getData()
            }
        },
        methods: {
            getData() {
                let params = {};
                let activeItem = this.tabs[this.activeTab];
                if (this.activeTab > 0) {
                    let parent = this.tabs[this.activeTab - 1];
                    params.id = parent.data[parent.active].id;
                }
                this.ajaxLoad = true;
                this.$http.post(this.$api[activeItem.api], params).then(res => {
                    if (res.code === 1000) {
                        activeItem.data = res.data;
                    }
                    this.ajaxLoad = false;
                })
            },
            switchTab(i) {
                this.activeTab = i;
            },
            // 选择
            pick(i) {
                let nowItem = this.tabs[this.activeTab];
                let acItem = nowItem.data[i];
                nowItem.active = i;
                nowItem.label = acItem.shortName;
                this.results = this.collectResults;
                // 是否是最终选择完成，activeTab >= 2
                if (this.activeTab < 2) {
                    this.tabs.forEach((item, i) => {
                        if (i <= 2 && i > this.activeTab) {
                            this.tabs[i].active = null;
                            this.tabs[i].label = '请选择';
                        }
                    });
                    this.activeTab++;
                    this.getData();
                } else {
                    this.closePanel();
                }
            },
            showPanel() {
                this.show = true;
            },
            closePanel() {
                this.show = false;
            },
            ousideClick() {
                this.closePanel()
            }
        },
        created() {
            this.results = this.value;
        }
    }
</script>

<style lang="less">
    @green: #1BC08B;
    @bg_color: #f0f0f0;
    .borderRadius(@radius: 4px) {
        -moz-border-radius: @radius;
        -webkit-border-radius: @radius;
        border-radius: @radius;
    }
    
    .noselect() {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .transition(@attribute: all, @time: .2s) {
        transition: @attribute @time;
        -moz-transition: @attribute @time;
        /* Firefox 4 */
        -webkit-transition: @attribute @time;
        /* Safari 和 Chrome */
        -o-transition: @attribute @time;
    }
    
    .vue-city-picker-container {
        display: inline-block;
        min-width: 100px;
        height: 42px;
        line-height: 42px;
        border: 2px solid @bg_color;
        .borderRadius;
        cursor: pointer;
        .noselect;
        .transition(all, 1s);
        font-size: 14px;
        &:hover {
            border-color: @green;
        }
        &:not(:last-child) {
            margin-right: 36px;
        }
        .inner-warp {
            display: inline-block;
            width: 100%;
            height: 100%;
            vertical-align: top;
            &+.inner-warp {
                border-left: 2px solid @bg_color;
            }
        }
        .goast-input {
            display: inline-block;
            width: 50px;
            height: 100%;
            border: 0;
            margin: 0;
            padding: 0;
            text-indent: 10px;
            vertical-align: top;
            .placeholder {
                color: #999
            }
            &:focus {
                outline: 0
            }
        }
        .goast-unit {
            display: inline-block;
            width: 35px;
            height: 100%;
            line-height: 46px;
            text-align: center;
            vertical-align: top;
            color: #999;
        }
    }
    
    .ls-picker-container {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 16px;
        color: #999;
        font-size: 12px;
        .value {
            color: #333;
            pointer-events: none;
            &.place-holder {
                color: #999;
            }
        }
        .iconfont {
            color: #999;
            font-size: 10px;
            float: right;
        }
        .area-box {
            position: absolute;
            width: 472px;
            top: 60px;
            background-color: #fff;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
            .borderRadius(6px);
            z-index: 999;
            .tabs {
                width: 100%;
                height: 45px;
                line-height: 45px;
                padding: 0 20px;
                border-bottom: 1px solid @bg_color;
                span {
                    display: inline-block;
                    width: 48px;
                    margin-right: 16px;
                    text-align: right;
                }
                .active {
                    color: @green;
                }
            }
            .items-contnet {
                width: 100%;
                min-height: 190px;
                padding: 20px;
                line-height: 0;
                .item {
                    display: inline-block;
                    font-size: 12px;
                    padding: 0 6px;
                    width: 60px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    margin-bottom: 10px;
                    .borderRadius;
                    overflow: hidden;
                    &:hover,
                    &.active {
                        background-color: @green;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>

