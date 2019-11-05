<template>
  <div class="index">
    <!-- 数据统计一 -->
    <div class="statistics-list">
      <div class="list-item shadow" v-for="(item,index) in list" :key="index">
        <div class="list-type-icon" :style="{background:item.bg}"></div>
        <div class="content">
          <h6 class="name">{{item.name}}</h6>
          <div class="value">{{item.value}}</div>
        </div>
        <div class="icon" :style="{background:item.bg}">
          <van-icon :name="item.icon" />
        </div>

      </div>
    </div>

    <!-- 数据统计二 -->
    <div class="section-two">
      <div class="current-serve">
        <h2 class="title">Current server uptime</h2>
        <div class="content">
          <p class="title2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="serve-chart" ref="line">

          </div>
        </div>
      </div>

      <div class="work-hour">
        <div class="section">
          <div class="content">
            <p class="value-wrapper">
              <span class="value">86.4</span>
              <span class="value-icon"></span>
            </p>
            <p class="title">Work hours</p>
            <p class="tip">Lorem ipsum dolor sit</p>
          </div>
          <div class="pie" ref="pie"></div>
        </div>
        <div class="section"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'index',
    components: {},
    props: {},
    data() {
      return {
        list: [{
            name: 'Data consumed',
            value: '145,14 GB',
            bg: '#DF99CA',
            icon: 'point-gift'
          },
          {
            name: 'Open cases',
            value: '32',
            bg: '#7CF29C',
            icon: 'point-gift'
          },
          {
            name: 'Work orders',
            value: '400',
            bg: '#4C84FF',
            icon: 'point-gift'
          },
          {
            name: 'New invoices',
            value: '123',
            bg: '#F0404C',
            icon: 'point-gift'
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {
      initCharts() {
        let myChart = echarts.init(this.$refs.chart);
        // 绘制图表
        myChart.setOption({
          title: {
            text: '在Vue中使用echarts'
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      initLineChart() {
        let myChart = echarts.init(this.$refs.line);
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          // 820, 932, 901, 934, 1290, 1330, 1320
          series: [{
            itemStyle: {
              normal: {
                color: '#7CF29C',
                lineStyle: {
                  color: '#7CF29C'
                },
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        });
      },
      initPieChart() {
        let myChart = echarts.init(this.$refs.pie);
        console.log(myChart)
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ]
          }]
        });

      }
    },

    created() {},
    mounted() {
      this.initLineChart();
      this.initPieChart();
    }
  }
</script>
<style lang="less" scoped>
  .index {
    flex: 1;
    margin: 0 48px 0;

    /* 数据统计一 */
    .statistics-list {
      display: flex;
      align-items: center;
      padding: 48px 0;

      .list-item {
        flex: 1;
        height: 86px;
        padding: 24px;
        margin: 0 15px;
        box-sizing: border-box;
        border-radius: 44px;
        display: flex;
        align-items: center;
        background: #fff;

        &.shadow {
          -webkit-box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
          box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
        }

        .list-type-icon {
          width: 10px;
          height: 10px;
          margin-right: 16px;
          border-radius: 50%;
        }

        .content {
          flex: 1;
          text-align: left;

          .name {
            margin: 0;
          }

          .value {
            color: #adb5bd;
            font-size: 14px;
            line-height: 20px;
          }
        }

        .icon {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          font-size: 14px;
        }
      }
    }

    /* 数据统计二 */
    .section-two {
      display: flex;

      .current-serve {
        text-align: left;
        background: #fff;
        margin: 0 15px;
        width: 909px;
        border-radius: 15px;

        .title {
          padding: 24px 32px;
          font-size: 18px;
          box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
          margin: 0;
          border-radius: 15px 15px 0 0;
        }

        .content {
          padding: 32px;

          .title2 {
            color: #adb5bd;
            font-size: 14px;
          }

          .serve-chart {
            width: 846px;
            height: 224px;
          }
        }
      }

      .work-hour {
        flex: 1;

        .section {
          display: flex;
          align-items: center;
          background: #fff;
          padding: 32px;
          margin: 0 15px;
          border-radius: 15px;
          margin-bottom: 16px;

          .content {
            flex: 1;
            text-align: left;

            .value-wrapper {
              display: flex;
              align-items: center;

              .value {
                margin-right: 16px;
                font-size: 28px;
                font-weight: 800;
              }

              .value-icon {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #7CF29C;
              }
            }

            .title {
              font-size: 17px;
              font-weight: 400;
              color: rgb(108, 117, 125);
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 16px;
              padding-bottom: 16px;
            }

            .tip {
              color: #6c757d !important;
              font-size: 12px;
            }
          }

          .pie {
            width: 333px;
            height: 166px;
          }
        }
      }
    }



  }
</style>