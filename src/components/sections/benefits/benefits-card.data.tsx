import {
  ChatBubbleLeftRightIcon,
  DocumentIcon,
  FolderIcon,
  HomeIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { BenefitsCardProps } from '@/components/sections/benefits/benifits-card.interface'

export const BenefitsCardData: BenefitsCardProps[] =
  [
    {
      title: 'Каталог',
      description:
        'Каталог датчиков, исполнительных механизмов и инструментов сферы автоматизации',
      icon: <FolderIcon height={30} width={30} />,
      note: 'Выполнено',
    },
    {
      title: 'Панель управления',
      description:
        'Каждый авторизованный пользователь имеет личную панель управления',
      icon: (
        <Squares2X2Icon height={30} width={30} />
      ),
      note: 'Выполнено',
    },
    {
      title: 'Разделение по ролям',
      description:
        'Каждая роль имеет свой набор опреденных функций',
      icon: <HomeIcon height={30} width={30} />,
      note: 'Выполнено',
    },
    {
      title: 'Тестирование',
      description:
        'Проверка знаний и умений студентов преподавателями',
      icon: <HomeIcon height={30} width={30} />,
      note: 'В процессе',
    },
    {
      title: 'Общение',
      description:
        'Общайтесь между собой как в личных переписках, так и в группах на различные темы',
      icon: (
        <ChatBubbleLeftRightIcon
          height={30}
          width={30}
        />
      ),
      note: 'В процессе',
    },
    {
      title: 'Работа с документами',
      description:
        'Преподаватели имеют возможность работать с документами внутри приложения',
      icon: (
        <DocumentIcon height={30} width={30} />
      ),
      note: 'В процессе',
    },
  ]
