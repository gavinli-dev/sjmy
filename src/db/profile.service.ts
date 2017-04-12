import { Injectable }   from '@angular/core';
import { Profile }      from './model/profile';

let profiles: Array<Profile> = [
    {
        id: '1',
        name: '王刚',
        subtitle: '影音技术总监',
        description: '1995年从华中科技大学自控系毕业后，就进入到保成路二洲电器公司工作，1997年全球经历国际金融危机，公司经营也面临困境，音响行业全面受损，面对音响行业面临的困境，我选择沉下来，静心研究音响的相关技术和视听室房间声学，接受了更多专业的技术培训，同时调整经营策略，开始代理国际一线音响品牌。消费升级在这场动荡中悄然发生，深化技术服务使公司经营日趋稳固，2005年公司启动品牌升级，开创个性化服务理念，2010年又率先引入定制服务理念。时至今日，我在影音行业风雨二十余载，见证着这个行业的风云变化，如今我们熟练的把影音定制，线上客服，线下体验结合的先进经营思路全线的铺开。我始终坚信客户是有很高鉴赏力的，服务是无止境的，我始终坚持把最优质的产品和优质的服务传递给我的消费者！坚持影音行业二十多年实属不易，不改初心！',
        images: ['/assets/img/team/01.png']
    },
    {
        id: '2',
        name: '施惠蓉',
        subtitle: '影院设计师',
        description: '大学毕业后，我先在一家外资装饰公司都做了六年，后在机缘巧合下进入世纪美音从事私人影院设计这一全新的行业，然而，国内没有可借鉴的案例，通过摸索实践和学习借鉴国外经验，世纪美音一步一步成为华中地区顶尖的影音设计公司。从业十年中，在与无数的客户沟通中发现，私人影院设计不同于普通的室内设计，而是函括了声学，美学，软装设计等多方面的系统科学，通过保障影音设备的声学控制科学化，还原电影导演拍摄时标准化，施工工艺便利化，最后呈现出来的影音效果才能触动人心。',
        images: ['/assets/img/team/02.png']
    },
    {
        id: '3',
        name: '李文胜',
        subtitle: 'HIFI音响调音师',
        description: '迄今为止，我在音响行业有二十五个年头，最早在闻名遐迩的保成路做音响销售，二十多年来，每天的工作就是用HIFI碟测试不同国度、不同品牌、不同型号的音响，听他们发出的声音，帮助客户辨析他们的风格，帮助客户找到他喜欢的声音，因为这份特殊的工作，每天沐浴在音乐的滋养里，多年不见的朋友再聚首时都会惊叹，“嗨！朋友，这么多年不见，你的变化不大呀！嗨，我们都老了，你还显年轻呀！”音乐使人年轻，这话一点不假，我是这句话的应证者！',
        images: ['/assets/img/team/03.png']
    },
    {
        id: '4',
        name: '廖丹卉',
        subtitle: '销售客服',
        description: '朋友说，我是个热情过头的人，首先，我读大学的时候兴致勃勃的报了企业管理专业，希望那一天能进入世界五百强成就人生高峰；毕业后却鬼使神差的做了财务，乐此不疲的与数字打交道；再后来，我想拥有更生动的人生，转身投入销售部门。不同的选择，都带给我不同的乐趣。在世纪美音的这么多年中，一起见证了公司的起伏、成长，个人在不断的挑战中实现了自我完善和成熟，个人兴趣与工作形成了完美统一，人生寻找到了声、音的和谐之美。',
        images: ['/assets/img/team/04.png']
    },
    {
        id: '5',
        name: '陈涛',
        subtitle: '售后设备维护师',
        description: '说实话，我之前是做安防监控的，后来，开始学钢琴的女儿嘲笑我五音不全，为了让家庭更多情趣，我毅然来到世纪美音从基础做起，只为女儿和我更多一些互动。一晃八年，回想起第一次音响安装到后期大型的影音设备维护的两千多个岁月里，与无数家庭打交到的过程中，看到冰冷的机器和线路经我的手发出完美的声音，看到客户在音乐中会心的微笑时，我突然意识到维护师的维系的是人和人之间最美的存在，这也是我的职责意义所在。我很开心，我选择对了！',
        images: ['/assets/img/team/05.png']
    }
]

@Injectable()
export class ProfileService {
    get(pid: string): Profile {
        let index = parseInt(pid) - 1;
        let newPro: Profile = profiles[index];
        return newPro;
    }
}