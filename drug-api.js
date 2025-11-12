// drug-api.js
module.exports = (req, res) => {
  // 设置响应头（允许跨域+返回JSON）
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }
  
  // 处理API请求：访问 /api/drugs 返回药物列表
  if (req.url === '/api/drugs' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ success: true, data: drugList }));
  } 
  // 处理单个药物请求：比如 /api/drugs/1 返回阿司匹林
  else if (req.url.startsWith('/api/drugs/') && req.method === 'GET') {
    const drugId = Number(req.url.split('/')[3]);
    const targetDrug = drugList.find(d => d.id === drugId);
    if (targetDrug) {
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, data: targetDrug }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ success: false, message: '未找到该药物' }));
    }
  } 
  // 其他路径返回404
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ success: false, message: '接口不存在' }));
  }
};
// 【完整30种药物数据】
const drugList = [
  {
    id: 1,
    name: '阿司匹林',
    effect: '解热镇痛、抗血栓（预防心梗/脑梗）',
    forbidden: '血友病患者、严重肝肾功能不全者、活动性溃疡患者',
    avoid: '对非甾体抗炎药过敏者',
    caution: '孕妇、哺乳期女性、儿童、老人（需遵医嘱）'
  },
  {
    id: 2,
    name: '布洛芬',
    effect: '解热镇痛、抗炎（缓解关节痛/牙痛）',
    forbidden: '孕妇、哺乳期女性、严重肝肾功能不全者、消化道出血史者',
    avoid: '对布洛芬或其他非甾体抗炎药过敏者',
    caution: '儿童、老人、胃肠道疾病史者'
  },
  {
    id: 3,
    name: '对乙酰氨基酚',
    effect: '解热镇痛（退烧、缓解轻中度疼痛）',
    forbidden: '严重肝肾功能不全者、酒精中毒者',
    avoid: '对本品过敏者',
    caution: '肝肾功能不全者、孕妇（遵医嘱使用）'
  },
  {
    id: 4,
    name: '头孢拉定',
    effect: '抗菌（治疗呼吸道、泌尿道、皮肤软组织感染）',
    forbidden: '对头孢类抗生素过敏者',
    avoid: '青霉素过敏者（可能交叉过敏）',
    caution: '肾功能不全者、孕妇、哺乳期女性'
  },
  {
    id: 5,
    name: '蒙脱石散',
    effect: '止泻（吸附肠道毒素、保护肠黏膜）',
    forbidden: '对本品过敏者',
    avoid: '无明确禁忌（过量易引发便秘）',
    caution: '便秘患者、儿童（需遵医嘱调整剂量）'
  },
  {
    id: 6,
    name: '阿莫西林',
    effect: '抗菌（治疗呼吸道、泌尿生殖道、消化道感染）',
    forbidden: '对青霉素类药物过敏者',
    avoid: '青霉素过敏史者',
    caution: '肾功能不全者、孕妇、哺乳期女性'
  },
  {
    id: 7,
    name: '奥美拉唑',
    effect: '抑制胃酸分泌（治疗胃溃疡、反流性食管炎）',
    forbidden: '对本品过敏者',
    avoid: '严重肝肾功能不全者（未评估风险前）',
    caution: '肝肾功能不全者、孕妇、哺乳期女性'
  },
  {
    id: 8,
    name: '沙丁胺醇',
    effect: '平喘（缓解支气管哮喘、慢阻肺的喘息症状）',
    forbidden: '对本品过敏者、严重心功能不全者',
    avoid: '甲状腺功能亢进者',
    caution: '高血压患者、糖尿病患者、孕妇'
  },
  {
    id: 9,
    name: '硝苯地平',
    effect: '降压、扩张血管（治疗高血压、心绞痛）',
    forbidden: '对本品过敏者、心源性休克患者',
    avoid: '严重低血压者',
    caution: '肝肾功能不全者、孕妇、哺乳期女性'
  },
  {
    id: 10,
    name: '二甲双胍',
    effect: '降糖（治疗2型糖尿病，改善胰岛素抵抗）',
    forbidden: '严重肝肾功能不全者、酮症酸中毒患者、孕妇',
    avoid: '对本品过敏者',
    caution: '哺乳期女性、老年患者（需监测肾功能）'
  },
  {
    id: 11,
    name: '氯雷他定',
    effect: '抗过敏（缓解过敏性鼻炎、荨麻疹症状）',
    forbidden: '对本品过敏者',
    avoid: '严重肝肾功能不全者（未调整剂量前）',
    caution: '孕妇、哺乳期女性、儿童（遵医嘱）'
  },
  {
    id: 12,
    name: '氨溴索',
    effect: '化痰（稀释痰液，促进排痰）',
    forbidden: '对本品过敏者',
    avoid: '无明确禁忌',
    caution: '孕妇、哺乳期女性、肝肾功能不全者'
  },
  {
    id: 13,
    name: '地塞米松',
    effect: '抗炎、抗过敏、抗休克（用于严重炎症/过敏反应）',
    forbidden: '对糖皮质激素过敏者、严重精神病史者、活动性溃疡者',
    avoid: '糖尿病患者（易升高血糖）',
    caution: '孕妇、哺乳期女性、儿童（长期用需监测副作用）'
  },
  {
    id: 14,
    name: '颠茄片',
    effect: '解痉止痛（缓解胃肠痉挛、胆道痉挛疼痛）',
    forbidden: '青光眼患者、前列腺肥大者、心动过速者',
    avoid: '对本品过敏者',
    caution: '孕妇、哺乳期女性、儿童'
  },
  {
    id: 15,
    name: '多潘立酮',
    effect: '促胃动力（缓解胃胀、恶心、呕吐）',
    forbidden: '乳腺癌患者、胃肠道出血者、机械性肠梗阻者',
    avoid: '对本品过敏者',
    caution: '孕妇、哺乳期女性、肝肾功能不全者'
  },
  {
    id: 16,
    name: '维生素C',
    effect: '补充维生素（增强免疫力、促进伤口愈合）',
    forbidden: '对本品过敏者',
    avoid: '无明确禁忌（过量易引发腹泻）',
    caution: '痛风患者、肾结石患者（需控制剂量）'
  },
  {
    id: 17,
    name: '开塞露',
    effect: '通便（润滑肠道、刺激排便，用于便秘）',
    forbidden: '对本品过敏者、肠梗阻患者',
    avoid: '无明确禁忌（长期用易依赖）',
    caution: '儿童（需成人监护使用）'
  },
  {
    id: 18,
    name: '云南白药',
    effect: '止血、活血化瘀（用于外伤出血、跌打损伤）',
    forbidden: '对本品过敏者、孕妇',
    avoid: '过敏体质者',
    caution: '哺乳期女性、儿童（遵医嘱）'
  },
  {
    id: 19,
    name: '碘伏',
    effect: '皮肤黏膜消毒（用于伤口、手术部位消毒）',
    forbidden: '对碘过敏者',
    avoid: '眼部、口腔黏膜（高浓度时）',
    caution: '新生儿（需稀释使用）'
  },
  {
    id: 20,
    name: '布洛芬混悬液',
    effect: '儿童解热镇痛（缓解儿童发烧、关节痛）',
    forbidden: '对布洛芬过敏者、严重肝肾功能不全儿童',
    avoid: '有消化道出血史的儿童',
    caution: '婴幼儿（需按年龄/体重调整剂量）'
  },
  {
    id: 21,
    name: '硝酸甘油',
    effect: '缓解心绞痛（扩张冠状动脉、改善心肌供血）',
    forbidden: '严重低血压者、青光眼患者、颅内压增高者',
    avoid: '对硝酸酯类药物过敏者',
    caution: '孕妇、哺乳期女性、老年患者'
  },
  {
    id: 22,
    name: '阿奇霉素',
    effect: '抗菌（治疗支原体/衣原体感染、呼吸道感染）',
    forbidden: '对大环内酯类抗生素过敏者',
    avoid: '严重肝肾功能不全者',
    caution: '孕妇、哺乳期女性、儿童'
  },
  {
    id: 23,
    name: '黄连素（盐酸小檗碱）',
    effect: '止泻抗菌（用于细菌性肠炎、痢疾）',
    forbidden: '对本品过敏者、溶血性贫血患者',
    avoid: '葡萄糖-6-磷酸脱氢酶缺乏者',
    caution: '孕妇、哺乳期女性、儿童'
  },
  {
    id: 24,
    name: '复方甘草片',
    effect: '止咳祛痰（缓解干咳、咳痰症状）',
    forbidden: '对本品过敏者、醛固酮增多症患者',
    avoid: '哺乳期女性（含阿片类成分）',
    caution: '孕妇、儿童、老年患者（需遵医嘱）'
  },
  {
    id: 25,
    name: '对乙酰氨基酚混悬滴剂',
    effect: '婴幼儿解热镇痛（缓解婴幼儿发烧、疼痛）',
    forbidden: '严重肝肾功能不全婴幼儿',
    avoid: '对本品过敏者',
    caution: '新生儿（需严格按体重调剂量）'
  },
  {
    id: 26,
    name: '卡托普利',
    effect: '降压（治疗高血压、心力衰竭）',
    forbidden: '对本品过敏者、双侧肾动脉狭窄者',
    avoid: '严重低血压者',
    caution: '孕妇、哺乳期女性、肾功能不全者'
  },
  {
    id: 27,
    name: '格列齐特',
    effect: '降糖（治疗2型糖尿病，促进胰岛素分泌）',
    forbidden: '1型糖尿病患者、酮症酸中毒患者、孕妇',
    avoid: '对磺脲类药物过敏者',
    caution: '哺乳期女性、肝肾功能不全者'
  },
  {
  id: 28,
     name: '孟鲁司特钠',
     effect: '平喘（预防哮喘发作、缓解过敏性鼻炎）',
     forbidden: '对本品过敏者',
     avoid: '无明确禁忌',
     caution: '孕妇、哺乳期女性、儿童（遵医嘱）'
   },
   {
     id: 29,
     name: '铝碳酸镁',
     effect: '保护胃黏膜（中和胃酸，治疗胃炎、胃溃疡）',
     forbidden: '对本品过敏者、严重肾功能不全者',
     avoid: '低磷血症患者（长期用易加重）',
     caution: '孕妇、哺乳期女性、儿童'
   },
   {
     id: 30,
     name: '左氧氟沙星',
     effect: '抗菌（治疗呼吸道、泌尿系统、消化系统感染）',
     forbidden: '18岁以下未成年人、孕妇、哺乳期女性',
     avoid: '对喹诺酮类药物过敏者',
     caution: '老年患者（易引发肌腱损伤）、肝肾功能不全者'
   }
 ];
 // 创建HTTP服务器
 const server = http.createServer((req, res) => {
   // 设置响应头（允许跨域+返回JSON）
   res.setHeader('Content-Type', 'application/json; charset=utf-8');
   res.setHeader('Access-Control-Allow-Origin', '*');
   // 处理API请求：访问 /api/drugs 返回药物列表
   if (req.url === '/api/drugs' && req.method === 'GET') {
     res.statusCode = 200;
     res.end(JSON.stringify({ success: true, data: drugList }));
   } 
   // 处理单个药物请求：比如 /api/drugs/1 返回阿司匹林
   else if (req.url.startsWith('/api/drugs/') && req.method === 'GET') {
     const drugId = Number(req.url.split('/')[3]);
     const targetDrug = drugList.find(d => d.id === drugId);
     if (targetDrug) {
       res.statusCode = 200;
       res.end(JSON.stringify({ success: true, data: targetDrug }));
     } else {
       res.statusCode = 404;
       res.end(JSON.stringify({ success: false, message: '未找到该药物' }));
     }
   } 
   // 其他路径返回404
   else {
     res.statusCode = 404;
     res.end(JSON.stringify({ success: false, message: '接口不存在' }));
   }
 });



