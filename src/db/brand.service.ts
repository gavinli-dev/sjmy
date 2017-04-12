import { Injectable }   from '@angular/core';
import { Brand }      from './model/brand';

let brands: Array<Brand> = [
    {
        id: '1',
        name: '王刚',
        subtitle: '技术总监',
        description: '自1995年华中科技大学自动化专业毕业后，从公司实习生到技术总监，历经20年风雨历程，从爱好出发成就了个人事业。国内首批获得美国THX、ISF、CEDIA等国际专业工程师认证，国内首批参加清华大学声学培训，获得美国认证的家庭影院大师称号。',
        images: ['/img/team/01.png']
    },
    {
        id: '2',
        name: '施惠蓉',
        subtitle: '设计总监',
        description: '1998年毕业于湖北工学院室内设计专业，华中科技大学建筑学研究生，从事了十几年的设计工作，已经成功完成了上百间私人影院的美学设计，具有专业的设计功底和较高的艺术审美能力。',
        images: ['/img/team/02.png']
    },
    {
        id: '3',
        name: '李文胜',
        subtitle: 'Hi-Fi部经理',
        description: '有20年以上的音响行业从业经验，在世纪美音已经工作了18年，从喜欢音乐变成终身职业。音乐使人年轻，48岁的他看起来还很年轻。',
        images: ['/img/team/03.png']
    },
    {
        id: '4',
        name: '陈涛',
        subtitle: '工程部经理',
        description: '在世纪美音工程部岗位上一干就是10年，他个性稳重，做事踏实、技术全面，对客户负责，细心周到，深得客户的喜爱，大家都亲切的称他：陈工。',
        images: ['/img/team/04.png']
    },
    {
        id: '5',
        name: '王刚',
        subtitle: '技术总监',
        description: '自1995年华中科技大学自动化专业毕业后，从公司实习生到技术总监，历经20年风雨历程，从爱好出发成就了个人事业。国内首批获得美国THX、ISF、CEDIA等国际专业工程师认证，国内首批参加清华大学声学培训，获得美国认证的家庭影院大师称号。',
        images: ['/img/team/05.png']
    }
]

@Injectable()
export class BrandService {
    get(pid: string): Brand {
        let index = parseInt(pid) - 1;
        let newItem: Brand = brands[index];
        return newItem;
    }

    getAll(): Array<Brand> {
        return brands;
    }
}