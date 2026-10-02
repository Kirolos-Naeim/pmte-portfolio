type FAQ = { question: string; answer: string };
type BilingualFAQs = { en: FAQ[]; ar: FAQ[] };

// Customer questions, rendered visibly and reused verbatim in FAQ structured data.
export const serviceQuestions: Record<string, BilingualFAQs> = {
  "demolition-company-abu-dhabi": {
    en: [
      { question: "How do I compare demolition companies in Abu Dhabi?", answer: "Compare the proposed scope, relevant project experience, licence and classification scope, site controls, equipment plan, waste-transport responsibilities and handover requirements. A building demolition quotation should distinguish structural removal, debris clearance and any excavation or levelling rather than leave these tasks assumed." },
      { question: "Where is PMTE's demolition company office in Musaffah?", answer: "PMTE is based on Al Madeenah As Sina'iyah 3 St, Musaffah M36, Abu Dhabi, UAE. Musaffah is also written as Mussafah. For demolition enquiries, call +971 2 633 7709 or +971 50 813 4134 and share your project location." },
      { question: "What affects building demolition cost in Abu Dhabi?", answer: "Cost depends on the structure and materials, removal limits, site access, nearby assets, proposed method, debris quantity, transport and required final condition. PMTE does not publish a standard demolition rate; request a project-specific quotation with drawings or photographs and a clear work scope." },
      { question: "How do I request a demolition contractor quotation?", answer: "Email petrolum@emirates.net.ae with the site location, building type, available drawings and photographs, removal requirements and proposed programme. Identify access restrictions and whether concrete cutting, foundation removal, waste transport, excavation or site clearance must be included. The team can then discuss the information and site review needed." },
      { question: "What commercial and industrial demolition experience does PMTE have?", answer: "The portfolio includes KMART Abu Dhabi building demolition, Saif Bin Darwish warehouse demolition and ADNEC Phases 1–4 demolition and removal. These examples help clients assess relevant experience without treating every project as the same type of assignment." },
      { question: "Can PMTE work as a demolition subcontractor?", answer: "Contact PMTE to discuss the contracting arrangement for your project. Provide the main contractor or consultant interfaces, removal limits, programme and responsibilities for transport and handover so the proposed subcontract scope can be reviewed." },
    ],
    ar: [
      { question: "كيف أقارن بين شركات هدم المباني في أبوظبي؟", answer: "قارن نطاق العمل المقترح والخبرة ذات الصلة ونطاق الرخصة والتصنيف وضوابط الموقع وخطة المعدات ومسؤوليات نقل المخلفات ومتطلبات التسليم. يجب أن يميز عرض سعر هدم المبنى بين الإزالة الإنشائية ورفع الأنقاض وأي حفريات أو تسوية مطلوبة." },
      { question: "أين يقع مقر شركة PMTE للهدم في مصفح؟", answer: "يقع مقر PMTE في شارع المدينة الصناعية 3، مصفح M36، أبوظبي، الإمارات. للاستفسار عن أعمال الهدم، اتصل على +971 2 633 7709 أو +971 50 813 4134 وأرسل موقع المشروع." },
      { question: "ما الذي يحدد تكلفة هدم مبنى في أبوظبي؟", answer: "تعتمد التكلفة على المنشأ والمواد وحدود الإزالة والوصول والأصول المجاورة وطريقة العمل وكميات الأنقاض والنقل وحالة التسليم المطلوبة. لا تنشر PMTE سعراً ثابتاً للهدم؛ اطلب عرضاً خاصاً بالمشروع مع المخططات أو الصور ونطاق عمل واضح." },
      { question: "كيف أطلب عرض سعر من مقاول هدم في أبوظبي؟", answer: "أرسل إلى petrolum@emirates.net.ae موقع المشروع ونوع المبنى والمخططات والصور المتاحة ومتطلبات الإزالة والبرنامج المقترح. وضح قيود الوصول والحاجة إلى قص الخرسانة أو إزالة الأساسات أو نقل المخلفات أو الحفريات أو تنظيف الموقع لمناقشة المعلومات والمعاينة اللازمة." },
      { question: "ما خبرة PMTE في هدم المباني التجارية والمستودعات؟", answer: "يشمل الملف هدم مبنى كي مارت أبوظبي وهدم مستودع سيف بن درويش وأعمال الهدم والإزالة في أدنيك بالمراحل 1–4. تساعد هذه الأمثلة في تقييم الخبرة المناسبة مع مراعاة اختلاف نطاق كل مشروع." },
      { question: "هل يمكن التعاقد مع PMTE كمقاول هدم من الباطن؟", answer: "تواصل مع PMTE لمناقشة ترتيب التعاقد. وضح التنسيق مع المقاول الرئيسي أو الاستشاري وحدود الإزالة والبرنامج ومسؤوليات النقل والتسليم لمراجعة نطاق المقاولة المقترح." },
    ],
  },
  "demolition-equipment-uae": {
    en: [
      { question: "How is heavy equipment selected for a demolition project?", answer: "Selection depends on the structure, material, access, working space, required reach and attachment compatibility. Excavators and demolition attachments address removal tasks, while loaders and transport support material handling. Confirm the proposed combination against the actual site scope rather than selecting by machine size alone." },
      { question: "Is the fleet list a live equipment-availability list?", answer: "No. The portfolio records equipment categories and identified models; it is not a live availability feed. Ask PMTE to confirm the machinery, attachments and mobilisation arrangements appropriate to your programme." },
    ],
    ar: [
      { question: "كيف تُختار المعدات الثقيلة لمشروع هدم؟", answer: "يعتمد الاختيار على المنشأ والمواد والوصول ومساحة العمل والمدى المطلوب وتوافق الملحقات. تنفذ الحفارات وملحقات الهدم أعمال الإزالة، وتدعم اللودرات ووسائل النقل مناولة المواد. يجب تأكيد مجموعة المعدات وفق النطاق الفعلي لا حجم المعدة فقط." },
      { question: "هل قائمة الأسطول تبين توافر المعدات حالياً؟", answer: "لا؛ يسجل الملف فئات المعدات والطرازات المحددة ولا يمثل قائمة توافر مباشرة. اطلب من PMTE تأكيد المعدات والملحقات وترتيبات التجهيز المناسبة لبرنامج المشروع." },
    ],
  },
  "earthworks-excavation-abu-dhabi": {
    en: [
      { question: "Can excavation follow demolition and foundation removal?", answer: "Yes, where included in the agreed scope. Define which structures and foundations must be removed, the excavation limits and the required formation or handover condition. PMTE's Al Ain Zoo experience includes cut, fill, demolition and excavation." },
      { question: "What should an earthworks or land-levelling enquiry include?", answer: "Send the location, available survey or level information, site photographs, access restrictions and required final levels. Clarify whether the requirement includes cut and fill, removal of material, transport or preparation after demolition." },
    ],
    ar: [
      { question: "هل يمكن تنفيذ الحفريات بعد الهدم وإزالة الأساسات؟", answer: "نعم عندما تكون ضمن النطاق المتفق عليه. حدد المنشآت والأساسات المطلوب إزالتها وحدود الحفر وحالة التسليم المطلوبة. تشمل خبرة PMTE في حديقة الحيوانات بالعين القطع والردم والهدم والحفريات." },
      { question: "ما المعلومات المطلوبة لأعمال الحفر والردم وتسوية الأرض؟", answer: "أرسل الموقع وبيانات الرفع المساحي أو المناسيب المتاحة والصور وقيود الوصول والمناسيب النهائية المطلوبة. وضح الحاجة إلى القطع والردم أو إزالة المواد ونقلها أو تجهيز الموقع بعد الهدم." },
    ],
  },
  "marine-works-abu-dhabi": {
    en: [
      { question: "What information is needed for a harbour or shoreline works enquiry?", answer: "Identify the location, removal or rock-arrangement limits, available drawings, access conditions and interfaces with other waterfront activities. PMTE's documented experience includes underwater concrete-block removal at Mina Zayed Harbour and shoreline rock arrangement." },
    ],
    ar: [
      { question: "ما المعلومات المطلوبة للاستفسار عن أعمال الموانئ والسواحل؟", answer: "حدد الموقع وحدود الإزالة أو ترتيب الصخور والمخططات المتاحة وظروف الوصول والتنسيق مع الأنشطة الأخرى على الواجهة البحرية. تشمل خبرة PMTE الموثقة إزالة كتل خرسانية تحت الماء في ميناء زايد وترتيب الصخور الساحلية." },
    ],
  },
};

export const projectContext: Record<string, { en: string[]; ar: string[] }> = {
  "mina-plaza-demolition": {
    en: ["Mina Plaza is part of PMTE's controlled high-rise demolition experience in Mina Zayed, Abu Dhabi. The Guinness World Records certificate names Modon Properties in association with Petroleum Machinery and Technical Equipment for the controlled demolition of a 165.032-metre building on 27 November 2020. PMTE is not presented as the sole record holder."],
    ar: ["يمثل مينا بلازا جزءاً من خبرة PMTE في دعم الهدم المنضبط للأبراج في ميناء زايد بأبوظبي. تسجل شهادة غينيس مدن العقارية بالاشتراك مع بتروليوم ماشينري آند تكنيكال إكويبمنت في الهدم المنضبط لمبنى بارتفاع 165.032 متراً بتاريخ 27 نوفمبر 2020، ولا تُعرض PMTE باعتبارها صاحبة الرقم القياسي وحدها."],
  },
  "adnec-demolition-phases": {
    en: ["The company portfolio records demolition and removal across ADNEC Phases 1–4 in Abu Dhabi. This exhibition-and-events project is a reference for clients discussing phased building removal with PMTE; the scope of a new assignment must be defined separately."],
    ar: ["يسجل ملف الشركة أعمال هدم وإزالة في أدنيك بأبوظبي ضمن المراحل 1–4. يمثل مشروع مرافق المعارض والفعاليات مرجعاً للعملاء عند مناقشة إزالة المباني على مراحل مع PMTE، مع تحديد نطاق أي تكليف جديد بصورة مستقلة."],
  },
  "kmart-abu-dhabi-demolition": {
    en: ["KMART Abu Dhabi is recorded as a commercial building demolition and clearance assignment. The project illustrates the distinction between removing a building and clearing the site; clients requesting a similar quotation should state which activities are required."],
    ar: ["يسجل الملف مشروع كي مارت أبوظبي ضمن أعمال هدم المباني التجارية وتنظيف الموقع. يوضح المشروع الفرق بين إزالة المبنى وتنظيف الموقع؛ ويُطلب من العميل توضيح الأنشطة المطلوبة عند طلب عرض لمشروع مشابه."],
  },
  "mina-zayed-buildings-removal": {
    en: ["This Mina Zayed assignment combines building removal and site levelling in an urban-redevelopment setting. It connects PMTE's demolition experience with earthworks and preparation for the next stage of a site's use."],
    ar: ["يجمع هذا المشروع في ميناء زايد بين إزالة المباني وتسوية الموقع ضمن أعمال إعادة التطوير الحضري، ويربط خبرة PMTE في الهدم بالأعمال الترابية وتجهيز الموقع لمرحلة استخدامه التالية."],
  },
  "saif-bin-darwish-warehouse-demolition": {
    en: ["The portfolio identifies warehouse demolition at Saif Bin Darwish in Abu Dhabi. This industrial-project reference supports enquiries about warehouse removal, with the structure, materials, access and required handover condition assessed for each new assignment."],
    ar: ["يوثق الملف هدم مستودع سيف بن درويش في أبوظبي. يمثل المشروع مرجعاً صناعياً للاستفسارات المتعلقة بإزالة المستودعات، مع تقييم متطلبات كل منشأة وموادها وطريقة إخراجها من الخدمة على حدة."],
  },
  "al-ain-zoo-earthworks": {
    en: ["The documented Al Ain Zoo scope includes cut, fill, demolition and excavation. It is a reference for combined earthworks and removal activities in Al Ain, connecting site preparation with the removal of existing elements."],
    ar: ["يشمل النطاق الموثق في حديقة الحيوانات بالعين القطع والردم والهدم والحفريات، ويوفر مرجعاً لأعمال الإزالة والأعمال الترابية المتكاملة في العين."],
  },
};
