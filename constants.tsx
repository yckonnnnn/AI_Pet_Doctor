
import { Medication, DiseaseInfo } from './types';

export const MEDICATIONS: Medication[] = [
  {
    id: '1',
    name: 'Apoquel 爱波克 (16mg)',
    subtitle: '30片装 / 用于控制过敏性皮炎',
    description: '快速缓解过敏性瘙痒和炎症。',
    tag: '高效止痒',
    price: 458.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9mJuV5Re-O8arUSB7e9vUaz758s7senVN8JJK1xwp3mVrML8rkwWL1CUd1Sm3a7xUnBs7qkMfXRyxQIV_MFJLeHHSbP7AURbIwT-TO51L5RidHaA1uLAnMqIAkfxRrLw-qpzbHmyIQ4DKcLVR3doeHR-TpDOJ0x5uqYf418T88DQTjCVRPqaXK_zAcd2QVjXIBtzMN8n1laZpN7QjK0BeJSKPyPPSMvno06jU_WW7R_Tl4O7XP4Bx70fkwJz55KiWoQSdxR5Lxj-t'
  },
  {
    id: '2',
    name: 'Zymox 三效清洗液',
    subtitle: '1.0 oz / 生物酶修护配方',
    description: '生物酶配方，不含抗生素。',
    price: 165.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBd7FXfgEgMxSCKYu_gqxOsCdmX8lBw3LaYFUdhfabtE1Y5LHUXATkknMzv6HA5PjYhU0IJ-w8thlUStBdj5Xiw5SSmEttsK-nm7gBwVnrYhdZleRzF_RVVE0voSLCBY8P3y0oAYGnv_IdxTdH-YRKkEU560laZTIWkbxG4VE8XQWHjDn2tmyMsum8meHP-1K4MVkecJNwwMeW5IKklrWZfjKIJ1Vm_E0J6jcuxnGYnLUP0n7B5_PxmwcIpk6-ww4BZ5nQmteQKAE'
  },
  {
    id: '3',
    name: 'Douxo S3 舒缓香波',
    subtitle: '500ml / 敏感肌长效舒缓',
    description: '针对敏感性皮肤设计，屏障修复。',
    tag: '皮肤屏障',
    price: 218.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWe94Ag17xAZyRlcEJsjLMyBgxE0Cr0UiK1ifiYQQMRdLc-xFs4HQhkesuj3F5-UEJoEBrCKurqnj-KCaEUBVgx7L_SJ5iXTN6HidC9gVcrnM1yEpY5So-j1OaBtIO7TZ7DEangKCpRg-6ZVwflWs6_pVxuGhxszLj53RA28s_b3pkpZNNRiNOT3uXvN8DZ0Ci_HmTveWrLM7XqA_ocLoAJTe_Yu70LmOVaMLEz9z_q4K1d8z6c5f-Ii3H08FBLVU5ndWotQlwPaiZ'
  },
  {
    id: '4',
    name: '普拿杜 益生菌冲剂',
    subtitle: '2g x 10袋 / 调节肠道菌群',
    description: '高活性益生菌，缓解呕吐腹泻。',
    tag: '肠胃调理',
    price: 89.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9mJuV5Re-O8arUSB7e9vUaz758s7senVN8JJK1xwp3mVrML8rkwWL1CUd1Sm3a7xUnBs7qkMfXRyxQIV_MFJLeHHSbP7AURbIwT-TO51L5RidHaA1uLAnMqIAkfxRrLw-qpzbHmyIQ4DKcLVR3doeHR-TpDOJ0x5uqYf418T88DQTjCVRPqaXK_zAcd2QVjXIBtzMN8n1laZpN7QjK0BeJSKPyPPSMvno06jU_WW7R_Tl4O7XP4Bx70fkwJz55KiWoQSdxR5Lxj-t'
  },
  {
    id: '5',
    name: '多西环素 片剂',
    subtitle: '100mg / 广谱抗菌药物',
    description: '用于支原体、衣原体及细菌感染。',
    price: 120.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBd7FXfgEgMxSCKYu_gqxOsCdmX8lBw3LaYFUdhfabtE1Y5LHUXATkknMzv6HA5PjYhU0IJ-w8thlUStBdj5Xiw5SSmEttsK-nm7gBwVnrYhdZleRzF_RVVE0voSLCBY8P3y0oAYGnv_IdxTdH-YRKkEU560laZTIWkbxG4VE8XQWHjDn2tmyMsum8meHP-1K4MVkecJNwwMeW5IKklrWZfjKIJ1Vm_E0J6jcuxnGYnLUP0n7B5_PxmwcIpk6-ww4BZ5nQmteQKAE'
  },
  {
    id: '6',
    name: 'Cystaid 利尿通',
    subtitle: '30粒 / 泌尿系统健康补充',
    description: '含有葡萄糖胺，帮助维持膀胱内壁粘多糖层健康。',
    tag: '泌尿健康',
    price: 195.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBd7FXfgEgMxSCKYu_gqxOsCdmX8lBw3LaYFUdhfabtE1Y5LHUXATkknMzv6HA5PjYhU0IJ-w8thlUStBdj5Xiw5SSmEttsK-nm7gBwVnrYhdZleRzF_RVVE0voSLCBY8P3y0oAYGnv_IdxTdH-YRKkEU560laZTIWkbxG4VE8XQWHjDn2tmyMsum8meHP-1K4MVkecJNwwMeW5IKklrWZfjKIJ1Vm_E0J6jcuxnGYnLUP0n7B5_PxmwcIpk6-ww4BZ5nQmteQKAE'
  },
  {
    id: '7',
    name: 'Terramycin 泰乐菌素眼膏',
    subtitle: '3.5g / 抗菌眼部护理',
    description: '用于治疗结膜炎、角膜炎等眼部细菌感染。',
    tag: '眼部护理',
    price: 78.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBd7FXfgEgMxSCKYu_gqxOsCdmX8lBw3LaYFUdhfabtE1Y5LHUXATkknMzv6HA5PjYhU0IJ-w8thlUStBdj5Xiw5SSmEttsK-nm7gBwVnrYhdZleRzF_RVVE0voSLCBY8P3y0oAYGnv_IdxTdH-YRKkEU560laZTIWkbxG4VE8XQWHjDn2tmyMsum8meHP-1K4MVkecJNwwMeW5IKklrWZfjKIJ1Vm_E0J6jcuxnGYnLUP0n7B5_PxmwcIpk6-ww4BZ5nQmteQKAE'
  }
];

export const DISEASE_LIBRARY: DiseaseInfo[] = [
  {
    id: 'DX-001',
    name: '过敏性皮炎',
    latinName: 'Allergic Dermatitis',
    keywords: ['皮肤', '红肿', '舔', '抓挠', '皮炎', '痒', '湿疹'],
    confidence: 94,
    severity: 'moderate',
    severityText: '中度炎症',
    insights: [
      { icon: 'error', color: 'text-amber-500', title: '特征性红斑', desc: '影像显示皮肤存在弥漫性潮红，符合典型过敏性接触反应。' },
      { icon: 'error', color: 'text-amber-500', title: '自我损伤行为', desc: '宠物表现出持续性舔舐，导致该区域被毛稀疏。' }
    ],
    environment: {
      title: '本地环境风险预警',
      desc: '您所在地区的当前花粉指数为“极高”。建议近期减少户外草坪活动。',
      metrics: [
        { label: '花粉', value: '高', color: 'text-red-400' },
        { label: '湿度', value: '64%' }
      ]
    },
    recommendations: ['1', '2', '3']
  },
  {
    id: 'DX-002',
    name: '急性胃肠炎',
    latinName: 'Acute Gastroenteritis',
    keywords: ['呕吐', '拉稀', '肚子痛', '不吃东西', '肠胃', '拉肚子', '便血', '精神萎靡'],
    confidence: 88,
    severity: 'high',
    severityText: '高度关注',
    insights: [
      { icon: 'warning', color: 'text-red-500', title: '胃肠道逆蠕动', desc: '频繁呕吐可能导致电解质失衡，需关注脱水体征。' },
      { icon: 'info', color: 'text-blue-500', title: '饮食应激', desc: '近期更换食物或误食异物可能是主要诱因。' }
    ],
    environment: {
      title: '季节性饮食风险',
      desc: '换季期间气温波动大，容易引起宠物消化系统应激，建议保持恒温进食。',
      metrics: [
        { label: '气温', value: '12℃', color: 'text-blue-300' },
        { label: '温差', value: '8℃' }
      ]
    },
    recommendations: ['4', '5']
  },
  {
    id: 'DX-003',
    name: '慢性口炎',
    latinName: 'Chronic Stomatitis',
    keywords: ['口臭', '食欲不振', '流口水', '口炎', '牙龈', '红肿', '吃饭疼', '嘴痛', '哈气'],
    confidence: 91,
    severity: 'moderate',
    severityText: '持续性炎症',
    insights: [
      { icon: 'error', color: 'text-amber-500', title: '牙龈增生', desc: '后臼齿区牙龈明显红肿，伴有肉芽组织增生。' },
      { icon: 'info', color: 'text-blue-500', title: '免疫性排斥', desc: '可能存在浆细胞性口炎倾向，建议进行病毒筛查。' }
    ],
    environment: {
      title: '口腔健康评分',
      desc: '当前年龄段属于口炎高发期，建议使用软质食物减少物理摩擦刺激。',
      metrics: [
        { label: '疼痛级', value: '4级', color: 'text-amber-400' },
        { label: '清洁度', value: '极差' }
      ]
    },
    recommendations: ['2', '5']
  },
  {
    id: 'DX-004',
    name: '猫特发性膀胱炎',
    latinName: 'Feline Idiopathic Cystitis',
    keywords: ['尿血', '尿频', '蹲尿', '尿不出', '哀叫', '频繁进出砂盆', '猫砂盆'],
    confidence: 85,
    severity: 'high',
    severityText: '急性风险',
    insights: [
      { icon: 'report_problem', color: 'text-red-500', title: '下尿路梗阻风险', desc: '如果出现完全无法排尿的情况，可能导致尿毒症，属于急诊。' },
      { icon: 'psychology', color: 'text-blue-400', title: '应激性诱因', desc: '环境变化或多猫家庭矛盾可能导致此病的急性发作。' }
    ],
    environment: {
      title: '生活压力指数',
      desc: '该病例通常与环境压力高度相关，建议增加多处饮水点并提供私密休息区。',
      metrics: [
        { label: '压力值', value: '高', color: 'text-red-400' },
        { label: '饮水量', value: '偏低' }
      ]
    },
    recommendations: ['6', '5']
  },
  {
    id: 'DX-005',
    name: '细菌性结膜炎',
    latinName: 'Bacterial Conjunctivitis',
    keywords: ['流眼泪', '眼睛红肿', '睁不开眼', '眼屎', '眯眯眼', '眼睛脓液'],
    confidence: 92,
    severity: 'low',
    severityText: '局部炎症',
    insights: [
      { icon: 'visibility', color: 'text-blue-500', title: '结膜充血', desc: '影像识别显示第三眼睑微突，球结膜明显血管扩张。' },
      { icon: 'science', color: 'text-purple-400', title: '交叉感染风险', desc: '建议检查是否由支原体引起，并避免与其他宠物接触。' }
    ],
    environment: {
      title: '空气质量影响',
      desc: '近期空气干燥且伴有浮尘，可能加剧眼部异物感和不适。',
      metrics: [
        { label: 'PM2.5', value: '115', color: 'text-amber-400' },
        { label: '空气湿度', value: '30%' }
      ]
    },
    recommendations: ['7', '5']
  },
  {
    id: 'DX-006',
    name: '外耳道炎',
    latinName: 'Otitis Externa',
    keywords: ['甩头', '抓耳朵', '耳朵臭', '黑褐色分泌物', '耳道红肿', '耳垢'],
    confidence: 89,
    severity: 'moderate',
    severityText: '局部感染',
    insights: [
      { icon: 'hearing', color: 'text-navy', title: '耳道狭窄', desc: '炎症导致外耳道上皮肥厚，分泌物阻塞严重。' },
      { icon: 'bug_report', color: 'text-green-500', title: '寄生虫筛查', desc: '分泌物形态疑似耳痒螨感染，需配合显微镜检确认。' }
    ],
    environment: {
      title: '洗护环境监测',
      desc: '潮湿环境易滋生真菌，建议洗澡后务必使用棉签吸干耳道水分。',
      metrics: [
        { label: '真菌指数', value: '中', color: 'text-amber-400' },
        { label: '洗澡频率', value: '2周/次' }
      ]
    },
    recommendations: ['2']
  }
];
