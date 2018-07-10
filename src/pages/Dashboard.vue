<template>
    <div class="dashboard">
        <div class="page-title">
            Dashboard
        </div>
        <Row>
            <Col span="5">
                <Card>
                    <p slot="title">The standard card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
            <Col span="5" offset="1">
                <Card>
                    <p slot="title">Disable card with hover shadows</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
            <Col span="5" offset="1">
                <Card>
                    <p slot="title">Disable card with hover shadows</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
            <Col span="5" offset="1">
                <Card>
                    <p slot="title">Disable card with hover shadows</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
        </Row>
        <div class="das-charts">
            <div id="charts" style="width: 100%;height:400px;"></div>
        </div>
        <div class="das-table">
            <Table border :columns="columns7" :data="tabledata"></Table>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            count: {},
            columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
            tabledata: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
        };
    },
    mounted() {
        this.drawChartsLine()
    },
    methods: {
        drawChartsLine() {
            var myChart = echarts.init( document.getElementById('charts') )
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    data:['蒸发量','降水量','平均温度']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '水量',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} ml'
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'平均温度',
                        type:'line',
                        yAxisIndex: 1,
                        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            }
            myChart.setOption(option)
        }
    },
};
</script>

<style scoped lang="scss">
.das-charts{
    margin: 2rem auto;
}
</style>