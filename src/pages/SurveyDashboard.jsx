import { useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Input,
  Button,
  Kbd,
} from '@chakra-ui/react'
import {
  Search,
  Bell,
  Globe,
  Plus,
  Sparkles,
  ChevronDown,
  User,
  Star,
  ThumbsUp,
} from 'lucide-react'

const NAV_ITEMS = [
  'Overview',
  'People',
  'Engage',
  'Performance',
  'feedback',
  'Goals',
  'Kudos',
  'Integrate',
  'Account',
]

const SIDEBAR_ITEMS = [
  { label: 'Surveys', active: true },
  { label: 'Archived Surveys', active: false },
  { label: 'Question Bank', active: false },
]

const QUICK_START = [
  { kind: 'blank', title: 'Blank Survey' },
  {
    kind: 'image',
    title: 'Quarterly Feedback Survey',
    badge: 'Engagement',
    art: 'stars',
  },
  {
    kind: 'image',
    title: 'Employee Wellness Survey',
    badge: 'Engagement',
    src: 'https://images.unsplash.com/photo-1526134873661-24b337d0052f?w=500&q=80&auto=format&fit=crop',
  },
  {
    kind: 'image',
    title: 'Career Growth Survey',
    badge: '360 Feedback',
    src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&q=80&auto=format&fit=crop',
  },
  {
    kind: 'image',
    title: 'Work-Life Satisfaction Survey',
    badge: 'Engagement',
    src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&q=80&auto=format&fit=crop',
  },
]

const STATUS = {
  live: { fill: '#22C55E', ring: false },
  ending: { fill: '#F97316', ring: false },
  closed: { fill: '#9CA3AF', ring: false },
  draft: { fill: 'transparent', ring: true },
}

const SURVEYS = [
  {
    title: 'Annual Students Progress Report',
    type: 'Engagement Survey',
    status: 'live',
    launch: "13 Feb '23",
    cutoff: "13 Mar '23",
    participants: 153,
    completion: 72,
    thumb: 'linear-gradient(135deg, #3E64E0 0%, #7B4FE0 100%)',
  },
  {
    title: 'Quarterly Feedback',
    type: '360 Feedback',
    status: 'live',
    launch: "20 Feb '23",
    cutoff: "05 Mar '23",
    participants: 34,
    completion: 55,
    thumb: 'linear-gradient(135deg, #F6A55C 0%, #ED64A6 100%)',
  },
  {
    title: 'Engagement Standup',
    type: '360 Feedback',
    status: 'draft',
    launch: '--',
    cutoff: '--',
    participants: 153,
    completion: 0,
    icon: true,
  },
  {
    title: 'Christmas Eve Feedback',
    type: 'Engagement Survey',
    status: 'closed',
    launch: "28 Dec '22",
    cutoff: "07 Jan '23",
    participants: 153,
    completion: 86,
    thumb: 'linear-gradient(135deg, #9B2C2C 0%, #E0555B 100%)',
  },
  {
    title: 'Work Collaboration',
    type: 'Engagement Survey',
    status: 'ending',
    launch: "10 Jan '23",
    cutoff: "24 Jan '23",
    participants: 128,
    completion: 45,
    thumb: 'linear-gradient(135deg, #6B46C1 0%, #4C51BF 100%)',
  },
]

const ACCENT = '#5B4FE8'
const TEAL = '#2E9E96'

function Logo() {
  return (
    <Box
      w="36px"
      h="36px"
      borderRadius="10px"
      position="relative"
      flexShrink={0}
      bg="#EDEEF2"
    >
      <Box
        position="absolute"
        top="7px"
        left="7px"
        w="16px"
        h="16px"
        bg="#2B2E38"
        borderRadius="4px"
        transform="rotate(45deg)"
      />
      <Box
        position="absolute"
        bottom="6px"
        right="6px"
        w="14px"
        h="14px"
        bg={TEAL}
        borderRadius="4px"
        transform="rotate(45deg)"
      />
    </Box>
  )
}

function TopNav() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      h="64px"
      px={{ base: '20px', lg: '56px' }}
      gap="16px"
      bg="white"
      borderBottom="1px solid #EBEDF0"
      flexShrink={0}
      overflowX="auto"
    >
      <Flex align="center" gap="12px" flexShrink={0}>
        <Logo />
        <Box>
          <Text fontWeight="700" fontSize="17px" color="#15161A" lineHeight="1.2" whiteSpace="nowrap">
            YourCompany
          </Text>
          <Text
            fontSize="11px"
            fontWeight="600"
            color="#9A9DA6"
            letterSpacing="0.06em"
            whiteSpace="nowrap"
          >
            ADMIN CONSOLE
          </Text>
        </Box>
      </Flex>

      <Flex as="nav" align="center" gap="32px" display={{ base: 'none', xl: 'flex' }}>
        {NAV_ITEMS.map((item) => {
          const active = item === 'Engage'
          return (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              h="32px"
              px="10px"
              borderRadius="8px"
              fontSize="15px"
              fontWeight={active ? '700' : '400'}
              color={active ? '#15161A' : '#8B8D98'}
              _hover={{ color: '#15161A', bg: '#F1F2F5' }}
            >
              {item}
            </Button>
          )
        })}
      </Flex>

      <Flex align="center" gap="16px" flexShrink={0} ml="auto">
        <Box as="button" color="#6B6E76" _hover={{ color: '#15161A' }} cursor="pointer">
          <Bell size={20} strokeWidth={1.75} />
        </Box>
        <Flex
          as="button"
          align="center"
          justify="center"
          w="36px"
          h="36px"
          borderRadius="10px"
          bg="#3D4148"
          color="white"
          cursor="pointer"
          _hover={{ bg: '#2B2E33' }}
        >
          <Globe size={17} strokeWidth={1.75} />
        </Flex>
        <Flex
          align="center"
          justify="center"
          w="40px"
          h="40px"
          borderRadius="full"
          bg="#E4E1FB"
          color="#5B4FE8"
        >
          <User size={19} strokeWidth={1.75} fill="#5B4FE8" />
        </Flex>
      </Flex>
    </Flex>
  )
}

function SearchBox() {
  return (
    <Box position="relative" mb="20px">
      <Box
        position="absolute"
        left="14px"
        top="50%"
        transform="translateY(-50%)"
        color="#9A9DA6"
        pointerEvents="none"
      >
        <Search size={16} strokeWidth={2} />
      </Box>
      <Input
        placeholder="Search surveys & folders..."
        bg="white"
        border="1px solid #E7E8EC"
        borderRadius="12px"
        h="42px"
        pl="38px"
        pr="40px"
        fontSize="13.5px"
        _placeholder={{ color: '#9A9DA6' }}
        _focus={{ borderColor: TEAL, boxShadow: `0 0 0 1px ${TEAL}` }}
      />
      <Kbd
        position="absolute"
        right="8px"
        top="50%"
        transform="translateY(-50%)"
        fontSize="10.5px"
        px="6px"
        py="2px"
        color="#9A9DA6"
        bg="#F1F2F5"
        border="none"
      >
        ⌘K
      </Kbd>
    </Box>
  )
}

function CreateFolderButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Box position="relative">
      <Flex
        as="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        align="center"
        justify="center"
        w="22px"
        h="22px"
        borderRadius="6px"
        border="1px solid #D6D8DD"
        color="#6B6E76"
        cursor="pointer"
        _hover={{ bg: '#F1F2F5' }}
      >
        <Plus size={13} strokeWidth={2} />
      </Flex>
      <Box
        position="absolute"
        top="-38px"
        right="-8px"
        bg="#22232A"
        color="white"
        fontSize="12px"
        fontWeight="500"
        px="10px"
        py="6px"
        borderRadius="7px"
        whiteSpace="nowrap"
        opacity={hovered ? 1 : 0}
        visibility={hovered ? 'visible' : 'hidden'}
        transition="opacity 0.15s"
        pointerEvents="none"
        boxShadow="0 4px 10px rgba(0,0,0,0.25)"
      >
        Create new folder
        <Box
          position="absolute"
          bottom="-4px"
          right="12px"
          w="8px"
          h="8px"
          bg="#22232A"
          transform="rotate(45deg)"
        />
      </Box>
    </Box>
  )
}

function Sidebar() {
  return (
    <Box as="aside" w={{ base: '100%', lg: '280px' }} flexShrink={0} pt="28px">
      <SearchBox />

      <Flex direction="column" gap="2px">
        {SIDEBAR_ITEMS.map((item) => (
          <Flex
            key={item.label}
            as="button"
            align="center"
            h="40px"
            pl="14px"
            borderRadius="8px"
            fontSize="14.5px"
            position="relative"
            fontWeight={item.active ? '600' : '400'}
            color={item.active ? '#15161A' : '#5B5D66'}
            bg={item.active ? '#EAF6F5' : 'transparent'}
            cursor="pointer"
            _hover={{ bg: item.active ? '#EAF6F5' : '#F1F2F5' }}
          >
            {item.active && (
              <Box
                position="absolute"
                left="0"
                top="6px"
                bottom="6px"
                w="3px"
                borderRadius="full"
                bg={TEAL}
              />
            )}
            {item.label}
          </Flex>
        ))}
      </Flex>

      <Flex align="center" gap="10px" mt="28px" mb="4px">
        <Text
          fontSize="11px"
          fontWeight="600"
          color="#ACAEB6"
          letterSpacing="0.08em"
          whiteSpace="nowrap"
        >
          FOLDERS
        </Text>
        <Box flex="1" h="1px" bg="#E7E8EC" />
        <CreateFolderButton />
      </Flex>
    </Box>
  )
}

function StarBadgeArt() {
  const stars = [
    { left: '14%', bottom: '14%', size: 16 },
    { left: '30%', bottom: '30%', size: 20 },
    { left: '48%', bottom: '46%', size: 24 },
    { left: '66%', bottom: '60%', size: 28 },
    { left: '82%', bottom: '72%', size: 22 },
  ]
  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      bg="linear-gradient(135deg, #FBD3DE 0%, #E7D8F5 55%, #CFE0FA 100%)"
      overflow="hidden"
    >
      {stars.map((s, i) => (
        <Box
          key={i}
          position="absolute"
          left={s.left}
          bottom={s.bottom}
          color="#F5B942"
          transform="rotate(-12deg)"
        >
          <Star size={s.size} fill="#F5B942" strokeWidth={0} />
        </Box>
      ))}
    </Box>
  )
}

function Badge({ children }) {
  return (
    <Box
      position="absolute"
      top="12px"
      left="12px"
      bg="rgba(20,20,22,0.85)"
      color="white"
      fontSize="11.5px"
      fontWeight="500"
      px="10px"
      py="4px"
      borderRadius="full"
    >
      {children}
    </Box>
  )
}

function QuickStartCard({ item }) {
  return (
    <Flex
      direction="column"
      bg="white"
      border="1px solid #ECEDF0"
      borderRadius="16px"
      overflow="hidden"
      cursor="pointer"
      transition="box-shadow 0.15s, transform 0.15s"
      _hover={{ boxShadow: '0 8px 20px rgba(20,20,30,0.08)', transform: 'translateY(-2px)' }}
    >
      <Box position="relative" h="150px" bg="#EAF6F4">
        {item.kind === 'blank' ? (
          <Flex align="center" justify="center" h="100%">
            <Plus size={26} strokeWidth={1.75} color="#8FADA9" />
          </Flex>
        ) : item.art === 'stars' ? (
          <StarBadgeArt />
        ) : (
          <Image src={item.src} alt="" w="100%" h="100%" objectFit="cover" />
        )}
        {item.badge && <Badge>{item.badge}</Badge>}
      </Box>
      <Box px="14px" py="14px">
        <Text fontSize="14.5px" fontWeight="600" color="#15161A" lineHeight="1.35">
          {item.title}
        </Text>
      </Box>
    </Flex>
  )
}

function QuickStart() {
  return (
    <Box bg="white" border="1px solid #ECEDF0" borderRadius="18px" p="24px">
      <Flex align="center" gap="8px" mb="20px">
        <Sparkles size={20} strokeWidth={2} color={ACCENT} fill={ACCENT} fillOpacity={0.15} />
        <Text fontSize="18px" fontWeight="700" color={ACCENT}>
          Make a quick start
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
        gap="18px"
      >
        {QUICK_START.map((item) => (
          <QuickStartCard key={item.title} item={item} />
        ))}
      </Grid>
    </Box>
  )
}

function CompletionPie({ value }) {
  const bg =
    value > 0
      ? `conic-gradient(${ACCENT} ${value * 3.6}deg, #E7E8EC 0deg)`
      : '#E7E8EC'
  return (
    <Box
      w="18px"
      h="18px"
      borderRadius="full"
      style={{ background: bg }}
      border={value === 0 ? '1px solid #D6D8DD' : 'none'}
    />
  )
}

function StatusDot({ status }) {
  const cfg = STATUS[status]
  return (
    <Box
      w="8px"
      h="8px"
      borderRadius="full"
      bg={cfg.fill}
      border={cfg.ring ? '1.5px solid #C9CBD1' : 'none'}
      flexShrink={0}
    />
  )
}

const COLUMNS = '2.4fr 1fr 1fr 0.9fr 1fr'

function SurveyRow({ survey, isLast }) {
  return (
    <Grid
      templateColumns={COLUMNS}
      alignItems="center"
      px="28px"
      py="16px"
      borderBottom={isLast ? 'none' : '1px solid #F1F2F5'}
      _hover={{ bg: '#FAFAFB' }}
      transition="background 0.1s"
    >
      <Flex align="center" gap="14px">
        <Flex
          w="44px"
          h="44px"
          borderRadius="12px"
          flexShrink={0}
          align="center"
          justify="center"
          style={survey.thumb ? { background: survey.thumb } : undefined}
          bg={survey.icon ? '#DDF1EE' : undefined}
        >
          {survey.icon && <ThumbsUp size={18} strokeWidth={2} color={TEAL} />}
        </Flex>
        <Box>
          <Flex align="center" gap="8px">
            <Text fontSize="14.5px" fontWeight="600" color="#15161A">
              {survey.title}
            </Text>
            <StatusDot status={survey.status} />
          </Flex>
          <Text fontSize="13px" color="#9A9DA6" mt="1px">
            {survey.type}
          </Text>
        </Box>
      </Flex>

      <Text fontSize="14px" color="#5B5D66">
        {survey.launch}
      </Text>
      <Text fontSize="14px" color="#5B5D66">
        {survey.cutoff}
      </Text>
      <Text fontSize="14px" color="#5B5D66">
        {survey.participants}
      </Text>
      <Flex align="center" gap="8px">
        <CompletionPie value={survey.completion} />
        <Text fontSize="14px" fontWeight="600" color="#15161A">
          {survey.completion}%
        </Text>
      </Flex>
    </Grid>
  )
}

function SurveysTable() {
  return (
    <Box bg="white" border="1px solid #ECEDF0" borderRadius="18px" overflow="hidden">
      <Flex
        align={{ base: 'flex-start', sm: 'center' }}
        justify="space-between"
        wrap="wrap"
        gap="14px"
        px="28px"
        h="64px"
      >
        <Text fontSize="22px" fontWeight="700" color="#15161A">
          Surveys
        </Text>
        <Flex align="center" gap="12px">
          <Flex
            as="button"
            align="center"
            justify="center"
            w="38px"
            h="38px"
            borderRadius="full"
            border="1px solid #E7E8EC"
            color="#5B5D66"
            flexShrink={0}
            _hover={{ bg: '#F5F6F8' }}
          >
            <Search size={16} strokeWidth={2} />
          </Flex>
          <Flex
            as="button"
            align="center"
            gap="8px"
            h="38px"
            px="16px"
            borderRadius="full"
            bg="#F1F2F5"
            fontSize="14px"
            fontWeight="500"
            color="#15161A"
            flexShrink={0}
            _hover={{ bg: '#E7E8EC' }}
          >
            All Surveys
            <ChevronDown size={15} strokeWidth={2} />
          </Flex>
          <Button
            bg={TEAL}
            color="white"
            borderRadius="full"
            h="38px"
            px="20px"
            fontSize="14px"
            fontWeight="600"
            flexShrink={0}
            _hover={{ bg: '#278C85' }}
          >
            New Survey
          </Button>
        </Flex>
      </Flex>

      <Box overflowX="auto">
        <Box minW="720px">
          <Grid
            templateColumns={COLUMNS}
            px="28px"
            py="12px"
            borderTop="1px solid #ECEDF0"
            borderBottom="1px solid #ECEDF0"
          >
            {['Title', 'Launch Date', 'Cut-Off Date', 'Participants', 'Completion'].map((h) => (
              <Text key={h} fontSize="13px" fontWeight="500" color="#9A9DA6" whiteSpace="nowrap">
                {h}
              </Text>
            ))}
          </Grid>

          {SURVEYS.map((survey, i) => (
            <SurveyRow key={survey.title} survey={survey} isLast={i === SURVEYS.length - 1} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default function SurveyDashboard() {
  return (
    <Box minH="100vh" bg="#F5F6F8" fontFamily="body">
      <TopNav />
      <Flex px={{ base: '20px', lg: '56px' }} gap="32px" direction={{ base: 'column', lg: 'row' }}>
        <Sidebar />
        <Box flex="1" py="28px" display="flex" flexDirection="column" gap="24px" minW="0">
          <QuickStart />
          <SurveysTable />
        </Box>
      </Flex>
    </Box>
  )
}
