<template>
<div style="margin: auto;width: 1200px">
  <!-- 习主席语录 -->
  <div class="one" style="text-align:center">
    <span style="font-size: 30px;color: #0737c7;font-weight:bold;">最广泛、最真实、最管用的民主</span><br/>
    <span style="font-size: 30px;color: #0737c7;font-weight:bold">——习近平总书记引领发展全过程人民民主</span>
  </div>
  <!--第二层-->
  <div class="two">
    <!--  幻灯片  -->
    <div class="block" style="width: 800px;float: left;padding-top: 10px">
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--  新闻简要  -->
    <div class="news" style="float: left;padding-top: 10px;margin-left: 20px;width: 380px">
      <h1 class="el-icon-caret-bottom" style="padding-bottom: 9px">新闻动态</h1><br/>
      <el-link class="el-icon-caret-right" href="https://element.eleme.io" target="_blank" style="font-size: 15px">学校召开各民主党派、统战团体2022年工作联席会 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
      <el-link class="el-icon-caret-right" type="_blank" style="font-size: 15px">学校召开党外人士学习习近平总书记重要回信精神座谈会 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
      <el-link class="el-icon-caret-right" type="_blank" style="font-size: 15px">“共植同心林 共画同心圆”——井冈山大学统一战线开展植树活动 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
      <el-link class="el-icon-caret-right" type="_blank" style="font-size: 15px">井冈山大学党外知识分子联谊会三届二次理事会召开 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
      <el-link class="el-icon-caret-right" type="_blank" style="font-size: 15px">井冈山大学附属医院党外知识分子联谊会闻令而动，勇敢逆行 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
      <el-link class="el-icon-caret-right" type="_blank" style="font-size: 15px">井冈山大学附属医院党外知识分子联谊会闻令而动，勇敢逆行 ——2022-10-28</el-link><br/>
      <el-divider></el-divider>
    </div>
  </div>
  <!-- 第三层 -->
  <div class="tree">
    <a href="https://www.zytzb.gov.cn/zytzb/ztlb/xxgczggcddescqgdbdhjs/index.shtml" title="中国共产党第二十次全国代表大会精神">
      <img src="../../assets/二十大.jpg" style="width: 800px;height: 110px">
    </a>
    <img src="../../assets/习大大.png" style="width: 380px;margin-left: 20px">
  </div>
  <!-- 第四层 -->
  <div class="four">
    <!--  各学院统战工作（左边部分）  -->
    <div style="width: 588px;float: left;margin-top: 20px;border-top-color: #5a8ef1;border-top-width: 10px;border-top-style:groove;">
      <div style="height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <h1 style="font-family: 'Javanese Text';color: #039ce3;margin-top: 20px">各学院统战工作</h1>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://mksxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 马克思主义学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://mksxy.jgsu.edu.cn/xyxw/202207/t20220708_112731.htm" target="_blank" style="text-decoration: none;color: black">马克思主义学院党委组织教工党员赴官田乡开展主题党日活动</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://zfxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 政法学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://zfxy.jgsu.edu.cn/txgz/txdt/202304/t20230427_120499.htm" target="_blank" style="text-decoration: none;color: black">政法学院团委学生会召开2023年主席团换届大会暨全体例会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://rwxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 人文学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://rwxy.jgsu.edu.cn/xsgz/txhd/202304/t20230418_120235.htm" target="_blank" style="text-decoration: none;color: black">龙江书院班开展“毛主席诗词与大学生成长”专题学习</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://wgy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 外国语学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://wgy.jgsu.edu.cn/qtgz/txgz/txhd/202212/t20221208_117647.htm" target="_blank" style="text-decoration: none;color: black">我院组织团委学生会干部深入学习党的二十大精神</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://sxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 商学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://sxy.jgsu.edu.cn/txgz/fczs/202211/t20221102_116970.htm" target="_blank" style="text-decoration: none;color: black">井冈山大学商学院第三次学生代表大会取得圆满结束</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://slxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 数理学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://slxy.jgsu.edu.cn/txgz/txhd/202304/t20230428_120514.htm" target="_blank" style="text-decoration: none;color: black">数理学院举办第八届科技文化艺术节开幕式</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jdxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 机电工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://jdxy.jgsu.edu.cn/jdtxgz/jdtxhd/202304/t20230423_120339.htm" target="_blank" style="text-decoration: none;color: black">机电工程学院举办安全教育主题讲座</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jzxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 建筑工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://jzxy.jgsu.edu.cn/txgz/txdt/202303/t20230329_118832.htm" target="_blank" style="text-decoration: none;color: black">建筑工程学院召开2023届考研复试指导会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://chem.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 化学化工学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://chem.jgsu.edu.cn/txgz/txhd/202304/t20230426_120464.htm" target="_blank" style="text-decoration: none;color: black">结对共建||红井冈班学员入户宣传防范电信网络诈骗知识</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://bio.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 生命科学学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://bio.jgsu.edu.cn/djsz/zzhd/202305/t20230504_120554.htm" target="_blank" style="text-decoration: none;color: black">生命科学学院召开学习贯彻习近平新时代中国特色社会主义思想主题教育集中学习和调研课题座谈会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 4">
          <i class="el-icon-house"></i><a href="http://ei.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 电子与信息工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 6">
          <a href="http://ei.jgsu.edu.cn/txgz/txdt/202303/t20230320_118618.htm" target="_blank" style="text-decoration: none;color: black">电信学院举办运动员表彰大会暨述职评议大会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jyxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 教育学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://jyxy.jgsu.edu.cn/txgz2/txdt2/202303/t20230318_118593.htm" target="_blank" style="text-decoration: none;color: black">教育学院召开2023届毕业生考研复试调剂指导会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://mc.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 医学部 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://mc.jgsu.edu.cn/dqgz_509/djhd_509/202206/t20220601_111941.htm" target="_blank" style="text-decoration: none;color: black">井冈山大学医学部“永远跟党走，奋进新征程”2022年党建知识竞赛圆满结束</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://art.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 艺术学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://art.jgsu.edu.cn/xw/xw/202303/t20230327_118727.htm" target="_blank" style="text-decoration: none;color: black">艺术学院组织全体党员观看《榜样》专题节目</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://tyxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 体育学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://tyxy.jgsu.edu.cn/djsz/zzhd/202303/t20230321_118623.htm" target="_blank" style="text-decoration: none;color: black">体育学院联合医学部赴邓家社区开展志愿服务</a>
        </div>
      </div>
    </div>
    <!--  党外知识分子（右边部分）  -->
    <div style="width: 588px;float: right;margin-top: 20px;border-top-color: #5a8ef1;border-top-width: 10px;border-top-style:groove;">
      <div style="height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <h1 style="font-family: 'Javanese Text';color: #039ce3;margin-top: 20px">组织结构</h1>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://mksxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 马克思主义学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://mksxy.jgsu.edu.cn/djsz/zzjg/202201/t20220120_110041.htm" target="_blank" style="text-decoration: none;color: black">马克思主义学院党组织及党员基本情况</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://zfxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 政法学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://zfxy.jgsu.edu.cn/txgz/zzfz/202304/t20230405_119010.htm" target="_blank" style="text-decoration: none;color: black">井冈山大学政法学院第十五届团委学生会成员名单</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://rwxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 人文学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://rwxy.jgsu.edu.cn/djsz/zzjg/201202/t20120227_23865.htm" target="_blank" style="text-decoration: none;color: black">党委组织机构</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://wgy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 外国语学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://wgy.jgsu.edu.cn/djgz/zzjg/202004/t20200420_95438.htm" target="_blank" style="text-decoration: none;color: black">组织机构</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://sxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 商学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://sxy.jgsu.edu.cn/djsz/zzjg/201805/t20180511_83889.htm" target="_blank" style="text-decoration: none;color: black">商学院党委组织结构</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://slxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 数理学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://slxy.jgsu.edu.cn/djsz/zzjs/201008/t20100813_1389.htm" target="_blank" style="text-decoration: none;color: black">数理学院党委、行政组织机构</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jdxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 机电工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="http://jdxy.jgsu.edu.cn/jdtxgz/txzz/202207/t20220729_113063.htm" target="_blank" style="text-decoration: none;color: black">团委.学生会</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jzxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 建筑工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://chem.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 化学化工学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://bio.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 生命科学学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 4">
          <i class="el-icon-house"></i><a href="http://ei.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 电子与信息工程学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 6">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://jyxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 教育学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://mc.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 医学部 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://art.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 艺术学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
      <div style="display: flex;align-items: center;height: 70px;padding-bottom: 10px;margin-bottom: 10px;border-bottom-width: 1px;border-bottom-color: #909399;border-bottom-style: dashed">
        <div style="flex: 3">
          <i class="el-icon-house"></i><a href="http://tyxy.jgsu.edu.cn/" target="_blank" style="text-decoration: none"> 体育学院 </a><el-divider direction="vertical"></el-divider>
        </div>
        <div style="flex: 7">
          <a href="#" target="_blank" style="text-decoration: none;color: black">全市统战部长会议召开</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomePage",
  data(){
    return{
      imagebox:[{id:0,idView: require('../../assets/0.png')},
        {id:1,idView: require('../../assets/1.jpg')},
        {id:2,idView: require('../../assets/2.jpg')}]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.image{
  width: 100%;
  height: inherit;
}

a p .el-icon-caret-right{
  font-family: "Microsoft Yahei";
}
a{
  font-size: 16px;
}
</style>