import { Injectable } from '@angular/core';
import { Faq } from './model/faq';

let faqs: Array<Faq> = [
    {
        id: '1',
        question: '什么是私人影院',
        answer: '在家中与家人朋友一起欣赏高清电影、K歌、看高清电视、打高清游戏，已经成为现代都市人一种很流行的生活和社交方式。私人影院和我们经常提到的家庭影院在概念上多少有些不同，所谓家庭影院，在普通住宅的客厅中就能够实现，而私人影院则需要一个独立的视听空间，除了对影音器材的硬件要求，还需要涉及到声学和美学的整体设计，通过专业的影音设计师来实现影院级的视听享受，我们称之为私人影院。'
    },
    {
        id: '2',
        question: '家庭影院能够实现哪些功能（简单的说，是做一个家庭影院对我们有哪些好处）',
        answer: '家庭影院是一个家庭的娱乐中心，可以实现很多功能：蓝光3D高清电影播放；硬盘机看高清电影、看网络在线电影；电视机顶盒看高清电视；专业卡拉OK演唱；高清游戏娱乐；高保真音乐欣赏；电脑网上冲浪。'
    },
    {
        id: '3',
        question: '什么样的房间适合做家庭影院',
        answer: '一般选择一间15-35平方的独立房间，房型为长方形最好，房间的长宽比在1.33-1.67之间，房间高度最好在2.6米以上。比如地下室、房间阁楼等，总之相对全宅采光条件最差的房间，高度合适，面积合适就适合留着做家庭影院。'
    },
    {
        id: '4',
        question: '武汉哪里有比较专业的公司可以提供这种服务',
        answer: '“为您定制专属影音空间，提升您的生活品质”是武汉世纪美音的服务理念。武汉市世纪美音电器有限公司——前身武汉二洲电器有限公司，在武汉地区从事了近20年高端私人影院器材的销售和服务，在业内有着十分良好的口碑！我们不断发挥专业优势的同时强化建筑声学，家居视觉美学，运用智能控制系统，配以人性化的休闲视听家居，为您打造一个梦幻般的个性影音空间。我们不是简单的出售产品，而是从声学设计，美学设计，产品选购，项目管理，安装调试，用户培训，维修保养，系统升级等提供全方位一站式的个性化服务。'
    },
    {
        id: '5',
        question: '做一个较专业的私人影院大概费用是多少',
        answer: '一间入门级15平方左右视听室的影音设备采购费用大约在10万元左右；一间比较专业点20平方左右视听室的影音设备采购费用在10万元以上。'
    },
    {
        id: '6',
        question: '如果费用有限，唱歌和看电影可以用一套设备吗',
        answer: '在私人影院里，唱歌和看电影是不能用一套设备的。因为两者实现的目的不同，对功放和音箱设备的要求当然也是不一样的。影院设备一般由前面的左主音箱、中置音箱、右主音箱，后面的4只环绕音箱和1只有源低音炮组成，一般俗称7.1声道。影院音箱追求的是灵敏度高、速度快、声音细腻，既能表现电影中火爆场景又能够清晰的表现人声对白，配合7.1声道的声场位移，能够让观众身临其境。而唱歌一般要求声音足够爆棚，动态足够大，声音有扑面感，所以一般选用10寸低音的专业卡拉OK音箱。前面悬挂两只卡拉OK音箱，用专业卡拉OK前级和大功率专业后级，加上电脑点歌器和无线话筒就可以组成一套效果比较出色的卡拉OK系统。'
    },
    {
        id: '7',
        question: '如何做好一个私人影院的施工',
        answer: '私人影院的施工应严格遵循项目管理流程来实施 。影音设计师是项目管理的领导者；优质项目管理者能够看透影音工程进度发展的未来，成为克服困难的专家；项目管理传递真相，验证设计是否符合要求。项目管理流程：启动---项目审核并推出；筹划---确定项目目标和范围；执行---设计和安装；控制---管理进度和定制时间表；结束---计算项目完成总额与客户验收。'
    },
    {
        id: '8',
        question: '什么样的私人影院才算是优质的私人影院',
        answer: '高品质视听器材的堆积，只是私人影院的初级阶段，一个真正好的私人影院首当其冲的是声学设计与美学设计构建的一个完美的视听环境，视听器材是还原声效的工具，优质的试听环境加上良好的视听器材才能够打造出高品质的私人影院。真正优质的私人影院给我们呈现的只有超大的高清屏幕，其它影音设备、线材都不应该出现在观众的视线范围内，映入观众眼帘的应该是舒适漂亮的真皮座椅和让人热血沸腾的画面。'
    },
    {
        id: '9',
        question: '想买一套音响，哪个品牌的好',
        answer: '音响主推美国的JBL，英国的B&W。两大品牌风格不同，可都是国际一线大牌，是众多国际知名成功人士的首选！'
    },
    {
        id: '10',
        question: '在选择什么样的牌子好时要考虑哪些因素',
        answer: '大家在选购家庭影院时,都会考虑家庭影院什么牌子好,但是也不要忽略家庭影院本身的影音播放系统的优势。请看一下内容介绍：影音播放系统主要包括三大部分组成,分别为音视频播放机、AV放大器、音箱系统。三者缺少了任何一部也不能称为家庭影院的播放系统。家庭影院播放系统的其中一个组成部分为音箱系统，也是播放系统中所占价格比例最大的一部分。音箱的选用一般为定阻音箱音质好,吸顶音箱、壁挂音箱、嵌入式音箱、等都可做为家庭影院音箱,根据不同的发烧程度来选配音箱。'
    },
    {
        id: '11',
        question: '武汉世纪美音能够为您提供哪些服务',
        answer: '根据客户的需求，我们提供不同的定制服务。我们的服务范围包括：别墅、会所、公寓提供一个独立房间实现影音娱乐功能：提供工程声学和美学设计、产品选购、项目管理、安装调试、用户培训、维修保养、系统升级等一系列的定制服务。要求在客厅里实现影音娱乐功能：宽敞的客厅适合安装一套音乐播放组合，搭配平板电视即可成为家庭娱乐中心，我们也同样提供工程声学和美学设计、产品选购、项目管理、安装调试、用户培训、维修保养、系统升级等一系列的定制服务。要求全宅（别墅、会所、公寓等）实现分区音乐分享：我们提供整体的背景音乐布局规划设计、产品选购、项目管理、安装调试、用户培训、维修保养、系统升级等一系列的定制服务，也可实现多区不同音乐的独立分享，让高品质的个性音乐成为生活中的一部分。要求对别墅、会所、公寓等影音系统实现全宅智能控制：只要通过智能手机，ipad或者特定的遥控设备，即可实现全方位的控制。操作简便，智能灵活，具有超强用户感观体验。'
    },
    {
        id: '12',
        question: '武汉世纪美音提供怎样的售后服务',
        answer: '我公司按国家3包法规定，对全部设备提供壹年的免费保修服务。功放按照厂家提供的服务承诺，提供2年免费保修服务；投影机按照厂家提供的服务承诺，提供整机3年，灯泡3年免费保修服务；音箱按照厂家提供的服务承诺，提供5年免费保修服务（低音炮除外）。还我公司还承诺做到：客户故障报修后24小时内有专业技术人员上门检修调试，如果是客户使用或者是产品的调试问题，必须当时解决问题。如果确实是客户产品出现故障，也应配合客户及时送修，如果客户有需求，我公司还要提供备用产品来保证客户的正常使用。'
    },
    {
        id: '13',
        question: '武汉世纪美音售后服务有何优势',
        answer: '为客户特别提供终身免费上门调试服务，以便客户能更好的使用我公司的产品和服务。我公司建立了90000G的高清电影库，可以向甲方提供长期免费的高清硬盘下载服务。'
    },
    {
        id: '14',
        question: '如果过了保修期，武汉世纪美音售后的修理费用怎么收取',
        answer: '对于因意外情况（如电压不稳，外力损坏，水、火等不可抗力因素）或超过免费保修期后产生的产品故障，乙方应配合提供相关的维修服务，并只收取零部件成本费用。'
    },
    {
        id: '15',
        question: '武汉世纪美音产品的品质如何保证',
        answer: '我公司所供的影音设备是符合国家技术规范和质量标准，经国家相关认证或国家有关部门检验的合格产品，与合同规定的型号与配置相一致。影音设备安装调试完毕后，设备能稳定运行，提供完美的影音效果。如发生所供设备与合同不符，客户有权拒收或退货，由此产生的一切责任和后果由我公司承担。'
    },
    {
        id: '16',
        question: '武汉世纪美音产品如何验收',
        answer: '我公司将影音设备运至安装现场拆箱、安装、调试，安排经验丰富的专业安装人员在现场进行安装和调试，并提供专业的音、视频测试设备来进行影音设备的调试。我公司所供的影音设备交付给客户使用时，必须向客户提供产品使用说明书、质量保证书、三包凭证等相关资料和原配的附件。我公司调试影音设备达到最佳使用效果，客户满意后，应双方共同签署《影音设备验收合格单》，表明影音设备达到客户的使用要求，产品验收合格。'
    },
];

@Injectable()
export class FaqService {
    get(pid: string): Faq {
        let index = parseInt(pid) - 1;
        let newItem: Faq = faqs[index];
        return newItem;
    }

    getAll(): Array<Faq> {
        return faqs;
    }
}