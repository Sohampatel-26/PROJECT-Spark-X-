export interface WebsiteContent {
  topic: string;
  siteName: string;
  tagline: string;
  subtitle: string;
  heroImage: string;
  heroQuote: string;
  aboutTitle: string;
  aboutText: string[];
  aboutImage: string;
  features: { title: string; description: string; icon: string }[];
  galleryImages: { src: string; caption: string }[];
  testimonials: { name: string; role: string; text: string; avatar: string }[];
  stats: { value: string; label: string }[];
  process: { step: string; title: string; description: string }[];
  team: { name: string; role: string; image: string }[];
  faq: { question: string; answer: string }[];
  services: { title: string; description: string; image: string }[];
  whyUs: { title: string; description: string; icon: string }[];
  ctaTitle: string;
  ctaText: string;
  introSubtitle: string;
  introDescription: string;
  introKeywords: string[];
  navLinks: string[];
  colorScheme: { primary: string; accent: string; bg: string; dark: string };
  uniqueSeed: number;
  layoutVariant: number;
  introVariant: number;
  pricing: { name: string; price: string; features: string[]; highlighted: boolean }[];
  newsletter: { title: string; description: string };
  partners: string[];
  blogPosts: { title: string; excerpt: string; image: string; date: string; category: string }[];
  heroOverlayStyle: number;
  heroLayout: number;
  fontPairIndex: number;
  businessType: string;
  products?: { name: string; price: string; description: string; image: string; badge?: string }[];
  menuItems?: { name: string; price: string; description: string; category: string }[];
  promoBanner?: string;
  categoryImages?: string[];
  featuredProducts?: number[];
  bgSection1?: string;
  bgSection2?: string;
  bgSection3?: string;
  bgSection4?: string;
  bgSection5?: string;
  bgSection6?: string;
  bgSection7?: string;
  bgSection8?: string;
}

/* ── Reliable Unsplash keyword-based images ── */
const _rawCuratedImages: Record<string, string[]> = {
  coffee: [
    "1495474472287-4d71bcdd2085", "1501339847302-ac426a4a7cbb", "1509042239860-f550ce710b93",
    "1442512595331-e89e73853f31", "1559496417-e7f25cb247f3", "1497935586351-b67a49e012bf",
    "1521302080334-4bebac2763a6", "1511920170033-f8396924c348", "1514432324607-a09d9b4aefda",
    "1498804103079-a6351b050096", "1485808191679-5f86510681a2", "1510707577-f016e2616b10",
    "1504630083234-14187a9df0f5", "1461023058943-07fcbe16d735", "1572442388796-11668a67e53d",
    "1447933601403-0c6688de566e", "1453614512568-c4024d13c247", "1517701604599-bb29b565090c",
    "1415604609365-22f1e138c228", "1507133750040-4a8f57021571",
  ],
  restaurant: [
    "1517248135467-4c7edcad34c4", "1414235077428-338989a2e8c0", "1504674900247-0877df9cc836",
    "1555396273-367ea4eb4db5", "1424847651672-bf20a4b0982b", "1466978913421-dad2ebd01d17",
    "1550966871-3ed3cdb51f3a", "1559339352-11d035aa65de", "1544025162-d76694265947",
    "1476224203421-9ac39bcb3327", "1552566626-52f8b828add9", "1540189549336-e6e99c3679fe",
    "1537047902294-62a40c20a6ae", "1565299624946-b28f40a0ae38", "1565958011703-44f9829ba187",
    "1567521464027-f127ff144326", "1482049016799-b1fb3ee075a1", "1528605248644-14dd04022da1",
    "1551218808-94e220e084d2",
  ],
  photography: [
    "1452587925148-ce544e77e70d", "1554048612-b6a482bc67e5", "1506905925346-21bda4d32df4",
    "1493238792000-8113da705763", "1500051638674-ff996a0ec29e", "1471341971476-ae15ff5dd4ea",
    "1542038784456-1ea8e935640e", "1519501025264-65ba15a82390", "1523438885200-e635ba2c371e",
    "1516035069371-29a1b244cc32", "1551836022-4c4c79ecde51", "1525909002-1b05e0c869d8",
    "1502982720700-bfb13adec56b", "1510127034890-ba27508e9f1c", "1495745966610-2a67f2297e5e",
    "1533228705751-22a7aa1ef5b6", "1516724562728-6e945a3e1983", "1554080353-a576cf803bda",
    "1516961024106-4096ac8c3e7a", "1501854140801-50d01698950b",
  ],
  travel: [
    "1488646953014-85cb44e25828", "1469854523086-cc02fe5d8800", "1507525428034-b723cf961d3e",
    "1476514525535-07fb3b4ae5f1", "1530789253388-582c481c54b0", "1503220317375-aaad61436b1b",
    "1501785888041-af3ef285b470", "1433838552652-f9a46b332c40", "1539635278303-d4002c07eae3",
    "1528127269322-539801943592", "1502003148287-a82ef80a6abc", "1500530855697-b586d89ba3ee",
    "1506197603052-3cc9c3a201bd", "1476900543704-4312b7d751b9", "1520250497591-112f2f40a3f4",
    "1504598318550-17eba1008a68", "1548574505-5321e20fea41", "1512100356356-de1b84283e18",
    "1519922639192-e73293ca430e", "1468746587034-766ade47c1ac",
  ],
  fitness: [
    "1534438327276-14e5300c3a48", "1571019614242-c5c5dee9f50b", "1517836357463-d25dfeac3438",
    "1540497077202-7c8a3999166f", "1576678927484-cc907957088c", "1549060279-7e168fcee0c2",
    "1518611012118-696072aa579a", "1574680096145-d05b474e2155", "1583454110551-21f2fa2afe61",
    "1581009146145-b5ef050c2e1e", "1544367567-0f2fcb009e0b", "1571902943202-507ec2618e8f",
    "1526506118085-60ce8714f8c5", "1594737625785-a6cbdabd333c", "1552674605-db6ffd4facb5",
    "1518310383802-640c2de311b2", "1548690312-e3b507d8c110", "1599058917212-d750089bc07e",
    "1546483875-ad9014c88eba", "1558017487-06bf9f82613a",
  ],
  tech: [
    "1518770660439-4636190af475", "1488590528505-98d2b5aba04b", "1461749280684-dccba630e2f6",
    "1504639725590-34d0984388bd", "1550751827-4bd374c3f58b", "1519389950473-47ba0277781c",
    "1535378917042-10a22c95931a", "1531297484001-80022131f5a1", "1526374965328-7f61d4dc18c5",
    "1555949963-aa79dcee981c", "1451187580459-43490279c0fa", "1550745165-9bc0b252726f",
    "1517694712202-14dd9538aa97", "1498050108023-c5249f4df085", "1504384764586-bb4cdc1707b0",
    "1573164713714-d95e436ab8d6", "1558494949-ef010cbdcc31", "1536148935331-408321065b18",
    "1519241047957-be31d7379a5d", "1483058712412-4245e9b90334",
  ],
  "real estate": [
    "1600596542815-ffad4c1539a9", "1600585154340-be6161a56a0c", "1613490493576-7fde63acd811",
    "1560448204-e02f11c3d0e2", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c", "1600566753086-00f18f6b7ab7", "1600573472591-ee6981cf81f0",
    "1600585154526-990dced4db0d", "1600047509807-ba8f99d2cdde", "1600566752355-35792bedcfea",
    "1558036117-15d82a90b9b1", "1516156008796-094d86e4c1e6", "1502672260266-1c1ef2d93688",
    "1565953522043-beda12644ed2", "1570129477492-45c003edd2be", "1484154218962-a197022b5858",
    "1560185007-cde436eebe2b", "1560185127-6ed189bf02f4",
  ],
  fashion: [
    "1558618666-fcd25c85f82e", "1445205170230-053b83016050", "1490481651871-ab68de25d43d",
    "1469334031218-e382a71b716b", "1441984904996-e0b6ba687e04", "1515886657613-9f3515b0c78f",
    "1483985988355-763728e1935b", "1509631179647-0177331693ae", "1496747611176-843222e1e57c",
    "1495385794356-15371f348c31", "1485462537746-965f33f7f6a7", "1487222477894-8943e31ef7b2",
    "1558171813-4c2a0bbb0e63", "1529139574466-a303027c1d8b", "1509319117193-57bab727e09d",
    "1492707892479-7bc8d5a4ee93", "1558769132-cb1aea458c5e", "1515372039744-b8f02a3ae446",
    "1542272604-787c3835535d", "1544957992-20514f595d6f",
  ],
  beauty: [
    "1624819318229-f006595a4993", "1629380106682-6736d2c327ed", "1644641815757-37b5d1520bd7",
    "1606158582120-b4fc196bffad", "1595051665600-afd01ea7c446", "1586495487593-1e01d9890cd6",
    "1596462502278-27bfdc403348", "1570172619644-dfd03ed5d881", "1512496015851-a90fb38ba796",
    "1522335789203-aabd1fc54bc9", "1526758097130-bab247274f58", "1516975080664-ed2fc6a32937",
    "1487412912498-0447578fcca8", "1560750588-73207b1ef5b8", "1571875257727-256c39da42af",
    "1596755094514-3c3e1f25e5f0", "1583209814683-c023dd3cda3c", "1571646034647-52e6ea84b28c",
    "1598440947619-2c35fc9aa908", "1576426863848-c21f53c60b19",
  ],
  cosmetics: [
    "1706821753638-70c7ddca341f", "1706821750093-c32649b934ce", "1706821751436-d2684b6ca25d",
    "1586495487593-1e01d9890cd6", "1606158582120-b4fc196bffad", "1595051665600-afd01ea7c446",
    "1596462502278-27bfdc403348", "1512496015851-a90fb38ba796", "1522335789203-aabd1fc54bc9",
    "1526758097130-bab247274f58", "1516975080664-ed2fc6a32937", "1487412912498-0447578fcca8",
    "1560750588-73207b1ef5b8", "1571875257727-256c39da42af", "1583209814683-c023dd3cda3c",
    "1571646034647-52e6ea84b28c", "1598440947619-2c35fc9aa908", "1576426863848-c21f53c60b19",
    "1570172619644-dfd03ed5d881", "1596755094514-3c3e1f25e5f0",
  ],
  wedding: [
    "1519741497674-611481863552", "1465495976277-4387d4b0b4c6", "1511285560929-80b456fea0bc",
    "1519225421980-715cb0215aed", "1507003211169-0a1dd7228f2d", "1544078751-58fee2d8a03b",
    "1515934751635-c81c6bc9a2d8", "1550005809-91ad75fb315f", "1460978812857-470ed1c77af0",
    "1522413452208-996ff3f3e740", "1519167758481-83f550bb49b3", "1546032996-6dfacbf4a511",
    "1508919801845-fc2ae1bc2a28", "1525258946800-98cbb98bc467", "1529634597503-139d3726fed5",
    "1521567097305-6cf7e9527e47", "1520854221256-17451cc331bf", "1505944270255-72b8c68c6a70",
    "1516220362602-dba5272aef86",
  ],
  music: [
    "1511379938547-c1f69419868d", "1493225457124-a3eb161ffa5f", "1514320291840-2e0a9bf2a9ae",
    "1507838153414-b4b713384a76", "1470225620780-dba8ba36b745", "1459749411175-04bf5292ceea",
    "1510915361894-db8b60106cb1", "1571974599782-87624638275e", "1524368535928-5b5e00ddc76d",
    "1508700929628-666bc8bd84ea", "1460723237483-7a6dc9d0b212", "1485579149621-3123dd979885",
    "1516280440614-37ccdab37b3c", "1598488035139-bdbb2231ce04", "1477233534935-f5e6fe7c1159",
    "1506157786151-b8491531f063", "1524650359799-842906ca885a",
  ],
  education: [
    "1503676260728-1c00da094a0b", "1523050854058-8df90110c9f1", "1509062522246-3755977927d7",
    "1427504494785-3a9ca7044f45", "1481627834876-b7833e8f5570", "1524178232363-1fb2b075b655",
    "1497633762265-9d179a990aa6", "1491841550275-ad7854e35ca6", "1488190211105-8b0e65b80b4e",
    "1522202176988-66273c2fd55f", "1513258496099-48168024aec0", "1434030216411-0b793f4b4173",
    "1456513080510-7bf3a84b82f8", "1580582932707-520aed937b7b", "1546410531-bb4cdc1707b0",
    "1524995997946-a1c6e315a42f",
  ],
  pet: [
    "1548199973-03cce0bbc87b", "1587300003388-59208cc962cb", "1530281700549-e82e7bf110d6",
    "1518717758536-85ae29035b6d", "1544568100-e4a90c39a72e", "1583337130417-1f9b27d29a73",
    "1560807707-8cc77767d783", "1573865526739-10659fec78a5", "1548767797-d8c844163c4c",
    "1537151625747-768eb6cf92b2", "1583511655826-05700442976d", "1574158622682-e40e69881006",
    "1596854407944-bf87f6fdd49e", "1522276498395-f4f68f7f8454", "1495360010541-f48722b34f7d",
    "1537151608828-ea2b11777ee8", "1586671267731-da2cf3ceeb80",
  ],
  car: [
    "1494976388531-d1058494cdd8", "1503376780353-7e6692767b70", "1492144534655-ae79c964c9d7",
    "1526726538690-5cbf956ae2fd", "1502877338535-766e1452684a", "1449130320039-a1e4f7b3f1c7",
    "1541348263662-e068af37d940", "1544636331-e26879cd4d9b", "1525609004556-c46c7d6cf023",
    "1553440569-bcc63803a83d", "1542362567-b07ad64d5b98", "1511919884226-fd3cad34687c",
    "1517153295259-74eb0b416cee", "1520608760-5ca32eaeca07", "1494905998875-5dd7de232646",
    "1504215680853-026ed2a45def", "1503736334956-4c8f8e92946d", "1485291571150-772bcfc10da5",
    "1555215695-3004980ad54e",
  ],
  nature: [
    "1470071459604-3b5ec3a7fe05", "1441974231531-c6227db76b6e", "1472214103451-9374bd1c798e",
    "1465146344425-f00d5f5c8f07", "1469474968028-56623f02e42e", "1501854140801-50d01698950b",
    "1447752875215-b2ceeb75fba9", "1418065460487-3e41a6c84dc5", "1431794062232-2a99a5431c6c",
    "1486870591958-9b9d0d1dda99", "1470252649378-9c29740c9fa8", "1505765050516-f72dcac9c60e",
    "1475924156734-496f6cac6ec1", "1433086966358-54859d0ed716", "1500382017468-9049fed747ef",
    "1506905925346-21bda4d32df4", "1493246507139-91e8fad9978e",
  ],
  medical: [
    "1538108149393-fbbd81895907", "1576091160399-112ba8d25d1d", "1559757175-5700dde675bc",
    "1516549655169-df83a0774514", "1530026405186-ed1f139313f8", "1584820927498-cfe5211fd8bf",
    "1551076805-e1869033e561", "1579684385127-1ef15d508118", "1581093458791-9f3c3250a8d0",
    "1576091160550-2173dba999ef", "1551601651-2a8555f1a136", "1584308666744-24d5c9a2dc28",
    "1505751172876-fa1923c5c528", "1519494026257-aeff85a46d3d", "1530026186672-4a0d4bc7bb49",
  ],
  gaming: [
    "1542751371-adc38448a05e", "1538481199705-c710c4e965fc", "1511512578047-dfb367046420",
    "1493711662062-fa541adb3fc8", "1552820728-8b83bb6b2e24", "1612287230202-1ff1d85d1bdf",
    "1585620385456-4a7827573b87", "1556438064-2d7646166914", "1579373903781-fd5c0c30c4cd",
    "1593305841991-05c297ba4575", "1509198397868-475647b2a1e5", "1511882150382-421056c89033",
    "1542751110-97427bbecf20", "1586182987320-4f376d39d787", "1531525645387-7f14be1bdbbd",
    "1547394765-185e1e68f34e", "1550921464-3c8cbfb0a980",
  ],
  tea: [
    "1556679343-c7306c1976bc", "1564890369-a3b6a6b5285e", "1597318181409-cf64d412b29c",
    "1558160074-4d7d8bdf4256", "1544787219-7f47ccb76574", "1563822249-ef7e9a948bfa",
    "1571934811356-5cc061b6218f", "1530968033-5dd3e7c0032e", "1576092768241-dec231879fc3",
    "1594631252845-29fc4e9cdeac",
  ],
  jewelry: [
    "1515562141207-7a88fb7ce338", "1573408301185-9146fe634ad0", "1602751584552-8ba73aad3c93",
    "1611591437281-460bfbe1220a", "1535632066927-ab7c9ab60908", "1506630448388-4e683c67ddb0",
  ],
  food: [
    "1504674900247-0877df9cc836", "1555396273-367ea4eb4db5", "1565299624946-b28f40a0ae38",
    "1540189549336-e6e99c3679fe", "1565958011703-44f9829ba187", "1482049016799-b1fb3ee075a1",
    "1476224203421-9ac39bcb3327", "1567521464027-f127ff144326", "1528605248644-14dd04022da1",
    "1551218808-94e220e084d2", "1537047902294-62a40c20a6ae", "1466978913421-dad2ebd01d17",
    "1550966871-3ed3cdb51f3a", "1559339352-11d035aa65de", "1544025162-d76694265947",
    "1424847651672-bf20a4b0982b", "1517248135467-4c7edcad34c4", "1414235077428-338989a2e8c0",
  ],
  bakery: [
    "1509440159-5696b5392e7f", "1558961363-fa8fdf82db35", "1486427944544-d2052751f851",
    "1517433670267-08bbd4be890f", "1495147466023-ac5c588e0c74", "1550617931-e18a5b5e8142",
  ],
  furniture: [
    "1555041469-a586c61ea9bc", "1538688525198-9b88f6f53126", "1556228453-efd6c1ff04f6",
    "1524758631624-e2822e304c36", "1506439773649-6e0eb8cfb237",
  ],
  plant: [
    "1459411552884-841db9b3cc2a", "1416879595882-3373a0480b5b", "1463936575829-25148e1db1b8",
    "1485955900006-d5f893763855",
  ],
  shoes: [
    "1542291026-7eec264c27ff", "1460353581996-0101055a5f29", "1549298916-b41d501d3772",
    "1595950653106-6c9ebd614d3a",
  ],
  electronics: [
    "1518770660439-4636190af475", "1550009158-9ebf69173e03", "1525547719-f4bbf4a75b70",
    "1588872657578-7efd1f1555ed", "1593642632559-0c6d3fc62b89", "1505740420928-5e560c06d30e",
    "1498049794561-7780e7231661", "1526738549149-8e07eca6c147", "1519389950473-47ba0277781c",
    "1550745165-9bc0b252726f", "1517694712202-14dd9538aa97", "1504384764586-bb4cdc1707b0",
    "1531297484001-80022131f5a1", "1526374965328-7f61d4dc18c5", "1555949963-aa79dcee981c",
    "1451187580459-43490279c0fa", "1498050108023-c5249f4df085", "1573164713714-d95e436ab8d6",
    "1558494949-ef010cbdcc31", "1536148935331-408321065b18",
  ],
  laptop: [
    "1496181133206-80ce9b88a853", "1525547719-f4bbf4a75b70", "1588872657578-7efd1f1555ed",
    "1517336714731-489689fd1ca8", "1504707748692-419802cf939d", "1519389950473-47ba0277781c",
    "1498050108023-c5249f4df085", "1531297484001-80022131f5a1", "1593642632559-0c6d3fc62b89",
    "1517694712202-14dd9538aa97", "1550009158-9ebf69173e03", "1505740420928-5e560c06d30e",
  ],
  phone: [
    "1511707171634-5f897ff02aa9", "1556656793-08538906a9f8", "1510557880182-3d4d3cba35a5",
    "1592899677112-901f05f3d55d", "1580910051074-3eb694886f50", "1565849904461-ef6e10b45fba",
    "1512054502232-10a0a035d672", "1574944985070-8f3ebc6b79d2", "1591337676887-a217a6970a8a",
    "1567581935884-3349723552ca", "1544866011-c64236e5364e", "1585060544812-6b45cf7dba76",
  ],
  sports: [
    "1461896836934-ffe607ba8211", "1579952363873-27f3bade9f55", "1517649763962-0c623066013b",
    "1552674605-db6ffd4facb5", "1530549387789-4c1017266635", "1574629810360-7efbbe195018",
  ],
  book: [
    "1481627834876-b7833e8f5570", "1512820790803-83ca734da794", "1507003211169-0a1dd7228f2d",
    "1524995997946-a1c6e315a42f", "1495446815901-a7297e633e8d", "1519682337058-a94d519337bc",
  ],
  art: [
    "1513364776144-60967b0f800f", "1547891654-e66ed7ebb968", "1460661419-a7e2c5d0a2c4",
    "1579783902614-a3fb3927b6a5",
  ],
  cleaning: [
    "1563453392212-326f5e854473", "1581578731548-c64695cc6952", "1585421514284-0a6a100e3eda",
  ],
  baby: [
    "1515488042361-ee00e0ddd4e4", "1519689680058-6c2e10579e8b", "1503454537195-1dcabb73ffb9",
  ],
  wine: [
    "1510812431401-41d2bd2722f3", "1474722883778-792e7990302f", "1506377247377-2a5b3b417ebb",
  ],
  candle: [
    "1602607718867-f635b0a450e3", "1543512214-318c7553f230", "1603006939419-3798e5e5a6a3",
  ],
  watch: [
    "1524592094714-0f0654e20314", "1523170335258-f5ed11844a49", "1542496204-451f83e4c9e3",
    "1509941943733-f1c4bfc48e21", "1547996160-81dfa63595aa", "1522312346375-d1a52e2b99b3",
    "1434056886845-dac89ead9c39", "1495856458515-0637185db551",
  ],
  perfume: [
    "1541643600914-78b084683601", "1588405748880-12d015d93dfe", "1563170351-be82bc888aa4",
    "1523293182086-7651a899d37f", "1592945403244-b3fbafd7f539", "1557170334-a9632e77c6e4",
    "1595425959084-d9c31c988d8f", "1563170351-be82bc888aa4",
  ],
  grocery: [
    "1542838132-92c53300e7e7", "1543168256-418811576931", "1488459716781-31db52582fe9",
    "1506617420156-8e4536971650", "1542990253-0d0f5be5f0ed", "1550989460-0adf9ea622e2",
    "1573246123716-6b1782bfc499", "1608686207828-57e9575fc0ad",
  ],
  toy: [
    "1558060318-c63c4685a8a1", "1566576912321-d58ddd7a6088", "1596461404969-9ae70f2830c1",
    "1555488205-1bd5b1bf0b70", "1563396983906-b3795482a59a", "1587654780498-1b16f0b2e0ec",
    "1596568006619-d89e08ce4f6f", "1530469525856-cf37954301f7",
  ],
};
// Deduplicate all arrays at init time
const curatedImages: Record<string, string[]> = {};
for (const [key, arr] of Object.entries(_rawCuratedImages)) {
  curatedImages[key] = [...new Set(arr)];
}

function getImageCategory(topic: string): string | null {
  const lower = topic.toLowerCase();
  const keywords: Record<string, string[]> = {
    coffee: ["coffee", "cafe", "brew", "espresso", "latte", "barista", "bean", "cappuccino", "mocha"],
    restaurant: ["restaurant", "dining", "chef", "cuisine", "bistro", "grill", "sushi", "diner"],
    photography: ["photo", "camera", "studio", "portrait", "lens", "shoot", "gallery", "videograph", "film"],
    travel: ["travel", "tour", "adventure", "explore", "vacation", "trip", "destination", "hotel", "resort", "tourism", "backpack", "cruise", "flight"],
    fitness: ["fitness", "gym", "workout", "exercise", "yoga", "sport", "training", "crossfit", "pilates", "wellness"],
    tech: ["tech", "software", "startup", "digital", "app", "code", "programming", "ai", "computer", "saas", "web", "cyber", "data", "cloud", "blockchain", "crypto"],
    "real estate": ["real estate", "property", "home", "house", "apartment", "luxury home", "interior design", "architecture", "construction"],
    fashion: ["fashion", "clothing", "style", "boutique", "apparel", "wear", "designer", "trend", "outfit", "wardrobe", "textile", "dress", "t-shirt", "tshirt", "saree", "sari", "lehenga", "kurta", "kurti", "salwar", "anarkali", "sherwani", "ethnic", "indian outfit", "indian wear", "traditional wear", "sharara", "ghagra", "churidar", "dupatta", "indo western"],
    beauty: ["beauty", "salon", "spa", "skincare", "facial", "hair salon", "nail", "hair"],
    cosmetics: ["cosmetic", "makeup", "lipstick", "foundation", "mascara", "eyeshadow", "blush", "concealer", "lip gloss", "beauty product"],
    wedding: ["wedding", "bride", "marriage", "celebration", "ceremony", "engagement", "bridal", "groom"],
    music: ["music", "concert", "band", "instrument", "dj", "audio", "sound", "record", "song", "singer", "producer"],
    education: ["education", "school", "university", "learning", "academy", "course", "tutor", "student", "teaching", "mentor"],
    pet: ["pet", "dog", "cat", "animal", "puppy", "kitten", "veterinary", "vet", "grooming"],
    car: ["car", "auto", "vehicle", "motor", "drive", "racing", "garage", "mechanic", "dealer", "suv", "truck"],
    nature: ["nature", "outdoor", "landscape", "mountain", "forest", "eco", "environment"],
    medical: ["medical", "doctor", "hospital", "clinic", "healthcare", "pharma", "dental", "therapy", "nurse", "medicine"],
    gaming: ["gaming", "game", "esport", "console", "playstation", "xbox", "nintendo", "streamer", "twitch"],
    tea: ["tea", "chai", "matcha", "herbal tea", "green tea", "black tea", "oolong", "tea leaf", "teapot"],
    jewelry: ["jewelry", "jewel", "ring", "necklace", "bracelet", "earring", "diamond", "gold", "silver", "gem", "watch"],
    food: ["food", "snack", "meal", "cook", "recipe", "catering", "pizza", "burger", "kitchen", "eat"],
    bakery: ["bakery", "cake", "pastry", "bread", "donut", "cookie", "cupcake", "bake", "sweet", "dessert", "chocolate"],
    furniture: ["furniture", "sofa", "table", "chair", "decor", "home decor", "interior", "cabinet", "bed", "mattress"],
    plant: ["plant", "garden", "flower", "floral", "bouquet", "nursery", "succulent", "herb", "seed", "organic farm"],
    shoes: ["shoe", "sneaker", "boot", "sandal", "footwear", "heel", "slipper"],
    electronics: ["electronic", "gadget", "device", "headphone", "speaker", "tablet", "smart", "wearable", "charger", "accessori"],
    laptop: ["laptop", "notebook", "macbook", "chromebook"],
    phone: ["phone", "mobile", "iphone", "android", "smartphone", "cellphone", "samsung"],
    sports: ["sport", "cricket", "football", "soccer", "basketball", "tennis", "golf", "baseball", "swimming", "running", "cycling", "athlet"],
    book: ["book", "novel", "library", "reading", "publish", "author", "literature", "ebook", "kindle", "bookstore"],
    art: ["art", "paint", "sculpt", "canvas", "exhibition", "museum", "drawing", "sketch", "watercolor", "gallery art"],
    cleaning: ["clean", "laundry", "detergent", "mop", "sanitiz", "janitor", "housekeep", "washing"],
    baby: ["baby", "infant", "toddler", "newborn", "nursery", "diaper", "stroller", "maternity", "kids", "child"],
    wine: ["wine", "vineyard", "winery", "sommelier", "champagne", "prosecco", "cellar", "grape", "vintage wine"],
    candle: ["candle", "wax", "fragrance", "scented", "aromatherapy", "incense", "diffuser"],
    watch: ["watch", "timepiece", "horology", "wristwatch", "chronograph", "smartwatch"],
    perfume: ["perfume", "cologne", "fragrance", "scent", "eau de", "body spray", "attar"],
    grocery: ["grocery", "supermarket", "organic", "fresh produce", "farm", "vegetable", "fruit"],
    toy: ["toy", "plaything", "lego", "doll", "board game", "puzzle", "stuffed animal", "action figure"],
  };
  for (const [cat, kws] of Object.entries(keywords)) {
    if (kws.some(kw => lower.includes(kw))) return cat;
  }
  return null;
}

// Shuffle array with seed for deterministic but unique ordering
function shuffleWithSeed(arr: string[], seed: number): string[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = Math.floor((s / 2147483647) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const _shuffledCache: Record<string, string[]> = {};
function getShuffledPhotos(photos: string[], seed: number, key: string): string[] {
  const cacheKey = `${key}_${seed}`;
  if (!_shuffledCache[cacheKey]) {
    _shuffledCache[cacheKey] = shuffleWithSeed(photos, seed);
  }
  return _shuffledCache[cacheKey];
}

let _currentSeed = 0;
function setImgSeed(seed: number) { _currentSeed = seed; _usedPhotoIds.clear(); }

// Track used photo IDs to prevent duplicates
const _usedPhotoIds = new Set<string>();

function getImg(topic: string, idx: number, w: number, h: number): string {
  const category = getImageCategory(topic);
  
  const pickUnique = (photos: string[]): string => {
    // Try to find an unused photo
    for (const photoId of photos) {
      if (!_usedPhotoIds.has(photoId)) {
        _usedPhotoIds.add(photoId);
        return `https://images.unsplash.com/photo-${photoId}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
      }
    }
    // All used — pick with offset to at least vary dimensions
    const photoId = photos[(idx + _usedPhotoIds.size) % photos.length];
    return `https://images.unsplash.com/photo-${photoId}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
  };
  
  // If we have curated images for this category, use them
  if (category && curatedImages[category]) {
    const photos = getShuffledPhotos(curatedImages[category], _currentSeed, category);
    return pickUnique(photos);
  }
  
  // For unknown topics, try to find the closest matching category by checking each word
  const fillerWords = ["selling", "website", "online", "shop", "store", "the", "and", "for", "a", "an", "my", "our", "best", "new", "create", "make", "build", "generate", "design", "page", "site", "web", "landing", "please", "want", "need", "i"];
  const words = topic.toLowerCase().split(/\s+/).filter(wd => wd.length > 2 && !fillerWords.includes(wd));
  
  // Try each word individually against categories
  for (const word of words) {
    const cat = getImageCategory(word);
    if (cat && curatedImages[cat]) {
      const photos = getShuffledPhotos(curatedImages[cat], _currentSeed, cat);
      return pickUnique(photos);
    }
  }
  
  // Final fallback: use a generic business/lifestyle set
  const fallbackCategories = ["tech", "nature", "fashion"];
  const fallbackCat = fallbackCategories[_currentSeed % fallbackCategories.length];
  const photos = getShuffledPhotos(curatedImages[fallbackCat], _currentSeed, fallbackCat);
  return pickUnique(photos);
}

/* ── Seeded PRNG ── */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return s / 2147483647; };
}
function pick<T>(arr: T[], rand: () => number): T { return arr[Math.floor(rand() * arr.length)]; }

/* ── Business type detection ── */
export type BusinessType = "ecommerce" | "restaurant" | "portfolio" | "service" | "saas" | "blog" | "education" | "fitness" | "agency" | "nonprofit";

function detectBusinessType(topic: string): BusinessType {
  const lower = topic.toLowerCase();
  const ecommerceKw = ["sell", "shop", "store", "buy", "product", "ecommerce", "e-commerce", "retail", "merch", "brand", "boutique", "market", "lipstick", "tea sell", "shoe", "sneaker", "jewelry", "watch", "clothing", "apparel", "furniture", "plant", "candle", "soap", "perfume", "bag", "accessory", "laptop", "phone", "mobile", "electronic", "gadget", "headphone", "speaker", "baby", "wine", "book", "toy", "grocery", "timepiece", "cologne", "fragrance", "saree", "sari", "lehenga", "kurta", "kurti", "salwar", "anarkali", "sherwani", "dupatta", "indian outfit", "ethnic wear", "indian wear", "traditional wear", "indian dress", "indo western", "ghagra", "churidar", "palazzo", "sharara"];
  const restaurantKw = ["restaurant", "cafe", "coffee", "bistro", "bakery", "food", "pizza", "sushi", "bar", "pub", "grill", "kitchen", "chef", "diner", "catering", "tea house", "tea room", "eatery"];
  const portfolioKw = ["photo", "portfolio", "artist", "design", "creative", "freelanc", "illustrat", "videograph", "film", "writer", "architect"];
  const saasKw = ["saas", "software", "app", "platform", "tool", "dashboard", "analytics", "ai", "cloud", "api", "startup", "tech"];
  const blogKw = ["blog", "magazine", "journal", "news", "article", "editorial", "publish", "media", "content"];
  const educationKw = ["education", "course", "learn", "teach", "school", "academy", "university", "training", "tutor", "class", "lesson", "student"];
  const fitnessKw = ["fitness", "gym", "workout", "yoga", "wellness", "health", "training", "crossfit", "pilates", "martial", "sport", "athletic"];
  const agencyKw = ["agency", "studio", "consulting", "firm", "partner", "digital agency", "creative agency", "marketing agency"];
  const nonprofitKw = ["nonprofit", "charity", "foundation", "donate", "volunteer", "cause", "ngo", "humanitarian", "social impact"];
  
  if (ecommerceKw.some(kw => lower.includes(kw))) return "ecommerce";
  if (restaurantKw.some(kw => lower.includes(kw))) return "restaurant";
  if (blogKw.some(kw => lower.includes(kw))) return "blog";
  if (educationKw.some(kw => lower.includes(kw))) return "education";
  if (fitnessKw.some(kw => lower.includes(kw))) return "fitness";
  if (agencyKw.some(kw => lower.includes(kw))) return "agency";
  if (nonprofitKw.some(kw => lower.includes(kw))) return "nonprofit";
  if (portfolioKw.some(kw => lower.includes(kw))) return "portfolio";
  if (saasKw.some(kw => lower.includes(kw))) return "saas";
  return "service";
}

/* ── Business name from prompt ── */
function generateSiteName(topic: string, rand: () => number, businessType: BusinessType): string {
  const words = topic.split(/\s+/).filter(w => w.length > 2 && !["selling", "website", "online", "shop", "store", "the", "and", "for"].includes(w.toLowerCase()));
  const mainWord = words[0] || topic.split(/\s+/)[0] || topic;

  const patterns: Record<BusinessType, ((w: string) => string)[]> = {
    ecommerce: [
      (w) => `${w} Boutique`, (w) => `${w} & Co.`, (w) => `The ${w} Shop`,
      (w) => `Luxe ${w}`, (w) => `${w} Market`, (w) => `Maison ${w}`,
      (w) => `${w} Emporium`, (w) => `Pure ${w}`, (w) => `${w} Collection`,
    ],
    restaurant: [
      (w) => `${w} Kitchen`, (w) => `The ${w} Table`, (w) => `Café ${w}`,
      (w) => `${w} & Co.`, (w) => `Maison ${w}`, (w) => `${w} House`,
      (w) => `The ${w} Room`, (w) => `${w} Eatery`,
    ],
    portfolio: [
      (w) => `${w} Studio`, (w) => `${w} Creative`, (w) => `The ${w} Lab`,
      (w) => `${w} Atelier`, (w) => `${w} Works`, (w) => `${w} Gallery`,
    ],
    saas: [
      (w) => `${w}ify`, (w) => `${w} Cloud`, (w) => `${w} HQ`,
      (w) => `${w} Labs`, (w) => `${w}.io`, (w) => `${w} Platform`,
    ],
    service: [
      (w) => `${w} & Co.`, (w) => `The ${w} Studio`, (w) => `${w} House`,
      (w) => `${w} Collective`, (w) => `${w} Hub`, (w) => `Artisan ${w}`,
      (w) => `${w} Works`, (w) => `The ${w} Lab`, (w) => `${w} Atelier`,
      (w) => `${w} Republic`, (w) => `Maison ${w}`, (w) => `${w} Guild`,
    ],
    blog: [
      (w) => `The ${w} Journal`, (w) => `${w} Digest`, (w) => `${w} Weekly`,
      (w) => `${w} Post`, (w) => `The ${w} Edit`, (w) => `${w} Chronicle`,
    ],
    education: [
      (w) => `${w} Academy`, (w) => `${w} School`, (w) => `Learn ${w}`,
      (w) => `${w} Institute`, (w) => `${w} Masterclass`, (w) => `${w} University`,
    ],
    fitness: [
      (w) => `${w} Fitness`, (w) => `${w} Gym`, (w) => `Iron ${w}`,
      (w) => `${w} Athletics`, (w) => `Peak ${w}`, (w) => `${w} Wellness`,
    ],
    agency: [
      (w) => `${w} Agency`, (w) => `${w} Partners`, (w) => `${w} Group`,
      (w) => `${w} Collective`, (w) => `Studio ${w}`, (w) => `${w} & Associates`,
    ],
    nonprofit: [
      (w) => `${w} Foundation`, (w) => `${w} Initiative`, (w) => `Hope ${w}`,
      (w) => `${w} Project`, (w) => `${w} Alliance`, (w) => `${w} Trust`,
    ],
  };
  // Pick from patterns but add extra randomness so same prompt gets different names each time
  const patternFn = patterns[businessType][Math.floor(rand() * patterns[businessType].length)];
  const suffixes = ["", " Co", " Studio", ""];
  const suffix = suffixes[Math.floor(rand() * suffixes.length)];
  const base = patternFn(mainWord);
  // Avoid double suffixes
  return suffix && !base.includes(suffix.trim()) ? base : base;
}

/* ── Contextual content generators ── */
function generateEcommerceContent(topic: string, rand: () => number, nextImg: (w: number, h: number) => string) {
  const lower = topic.toLowerCase();
  let productNames: string[] = [];
  let productDescs: string[] = [];
  
  if (lower.includes("tea")) {
    productNames = ["Earl Grey Premium", "Matcha Ceremonial Grade", "Jasmine Dragon Pearl", "Darjeeling First Flush", "Oolong Gold Reserve", "Chamomile Bliss", "Rooibos Sunset", "Sencha Superior", "White Peony Silver", "Lapsang Souchong", "Hibiscus Rose Blend", "Peppermint Fresh", "Genmaicha Toasted", "Pu-erh Vintage Cake", "Milk Oolong Silk", "Gunpowder Green", "Chai Masala Royal", "Butterfly Pea Flower", "Yerba Mate Energy", "Dragon Well Longjing"];
    productDescs = ["Rich, aromatic black tea with bergamot notes", "Stone-ground Japanese ceremonial matcha", "Hand-rolled jasmine-scented green tea pearls", "Light, muscatel flavor from the Himalayas", "Smooth, semi-oxidized with honeyed sweetness", "Calming herbal blend with whole chamomile flowers", "Caffeine-free South African rooibos with vanilla", "Premium Japanese green tea, bright and grassy", "Delicate white tea with floral undertones", "Smoky pine-smoked black tea from Fujian", "Tart hibiscus with dried rose petals", "Cooling peppermint leaves, hand-picked", "Roasted rice green tea, nutty and warming", "Aged pu-erh pressed cake, earthy and smooth", "Creamy Taiwanese oolong with buttery notes", "Tightly rolled Chinese green tea, bold flavor", "Spiced black tea with cardamom and cinnamon", "Color-changing herbal tea, citrus-enhanced", "South American energizing herbal infusion", "Pan-fired Chinese green tea, chestnut aroma"];
  } else if (lower.includes("lipstick") || lower.includes("cosmetic") || lower.includes("makeup") || lower.includes("beauty product")) {
    productNames = ["Velvet Rouge", "Nude Bliss Matte", "Berry Kiss Satin", "Coral Sunset", "Plum Divine", "Rose Petal Gloss", "Crimson Desire", "Mocha Velvet", "Peach Bloom", "Wine Noir", "Cherry Bomb", "Blush Silk", "Cinnamon Spice", "Mauve Dream", "Terracotta Glow", "Fuchsia Pop", "Brick Red Classic", "Dusty Rose", "Honey Nude", "Scarlet Luxe"];
    productDescs = ["Long-lasting matte finish in classic red", "Your-lips-but-better nude shade", "Juicy berry with satin sheen", "Warm coral for a sun-kissed look", "Deep plum with creamy texture", "Sheer rose with high-shine gloss", "Bold crimson with 12-hour wear", "Warm mocha with velvety matte finish", "Soft peach with natural glow", "Rich wine shade for evening glamour", "Vibrant cherry with semi-matte finish", "Delicate pink with silk-smooth application", "Warm spice shade with creamy formula", "Soft mauve with velvet finish", "Earthy terracotta with hydrating formula", "Electric fuchsia for bold statements", "Timeless brick red, universally flattering", "Muted rose with satin comfort", "Warm honey nude for everyday elegance", "Intense scarlet with luxury packaging"];
  } else if (lower.includes("saree") || lower.includes("sari") || lower.includes("lehenga") || lower.includes("kurta") || lower.includes("kurti") || lower.includes("salwar") || lower.includes("anarkali") || lower.includes("sherwani") || lower.includes("indian outfit") || lower.includes("ethnic wear") || lower.includes("indian wear") || lower.includes("traditional wear") || lower.includes("indian dress") || lower.includes("indo western") || lower.includes("sharara") || lower.includes("ghagra") || lower.includes("churidar") || lower.includes("palazzo") || lower.includes("dupatta")) {
    productNames = ["Banarasi Silk Saree", "Chanderi Cotton Kurti", "Anarkali Floor Gown", "Bridal Lehenga Set", "Lucknowi Chikankari Suit", "Kanjivaram Silk Drape", "Designer Sharara Set", "Bandhani Dupatta", "Ajrakh Block Print Kurta", "Zardozi Embroidered Lehenga", "Pochampally Ikat Saree", "Palazzo Kurta Combo", "Mirror Work Chaniya Choli", "Patola Silk Heritage", "Phulkari Embroidered Suit", "Mysore Silk Classic", "Handloom Cotton Kurta Set", "Organza Floral Saree", "Royal Sherwani Set", "Mughal Motif Anarkali"];
    productDescs = ["Pure Banarasi silk with gold zari weave, handcrafted in Varanasi", "Lightweight Chanderi cotton with delicate hand-block prints", "Flowing Anarkali with intricate threadwork and flared silhouette", "Luxurious bridal lehenga with heavy embroidery and matching dupatta", "Exquisite Lucknowi chikankari hand-embroidery on georgette", "Traditional Kanjivaram silk with temple border, South Indian heritage", "Contemporary sharara with sequin work and net dupatta", "Tie-dye Bandhani craft from Rajasthan on pure silk", "Hand-stamped Ajrakh prints on natural-dyed cotton", "Royal zardozi gold thread embroidery on velvet lehenga", "Double ikat weave from Telangana, geometric patterns", "Modern palazzo with straight-cut kurta, block printed", "Traditional Gujarati chaniya choli with mirror embellishments", "Heritage Patola double ikat silk, collector's edition", "Vibrant Phulkari hand-embroidery from Punjab on silk", "Smooth Mysore silk with gold kasab border", "Handwoven cotton kurta set with natural dyes", "Sheer organza saree with floral machine embroidery", "Regal sherwani with churidar and stole for groom", "Mughal-inspired Anarkali with metallic embroidery work"];
  } else if (lower.includes("shoe") || lower.includes("sneaker") || lower.includes("footwear")) {
    productNames = ["Classic Runner V2", "Urban Street Low", "Premium Loafer", "Trail Blazer Pro", "Canvas Minimal", "Leather Oxford", "Retro High-Top", "Slip-On Comfort", "Suede Chelsea Boot", "Athletic Sprint", "Woven Summer Slide", "Knit Runner Lite", "Desert Boot Classic", "Platform Sneaker", "Hiking Explorer X", "Moccasin Soft", "Ankle Boot Luxe", "Espadrille Summer", "Basketball Legend", "Boat Shoe Coastal"];
    productDescs = ["Lightweight mesh with responsive cushion", "Minimalist street style leather sneaker", "Handcrafted Italian leather slip-on", "Rugged waterproof trail shoe", "Organic cotton canvas everyday shoe", "Timeless formal shoe in full grain leather", "Vintage-inspired high-top with premium suede", "Memory foam insole for all-day comfort", "Elastic panel Chelsea boot in soft suede", "Performance running shoe with carbon plate", "Breathable woven sandal for summer days", "Flyknit upper with cloud-like cushioning", "Classic chukka boot in oiled suede", "Elevated platform with chunky sole design", "Gore-Tex waterproof, Vibram outsole", "Soft deerskin with hand-stitched detail", "Sleek ankle boot with zipper accent", "Jute-soled summer essential, handmade", "Retro basketball shoe with Air cushion", "Premium leather boat shoe, non-marking sole"];
  } else if (lower.includes("jewelry") || lower.includes("jewel")) {
    productNames = ["Luna Pendant", "Eternity Band", "Cascade Earrings", "Soleil Bracelet", "Heritage Signet", "Aurora Chain", "Pearl Drop Studs", "Sapphire Halo Ring", "Twisted Bangle", "Diamond Solitaire", "Opal Charm Necklace", "Ruby Cluster Brooch", "Emerald Tennis Bracelet", "Moonstone Choker", "Topaz Cocktail Ring", "Garnet Huggie Hoops", "Turquoise Cuff", "Amethyst Lariat", "Citrine Stud Set", "Alexandrite Pendant"];
    productDescs = ["18k gold crescent moon pendant with diamond", "Pavé-set diamond eternity wedding band", "Waterfall-style drop earrings in sterling silver", "Sun-inspired charm bracelet with gemstones", "Classic signet ring in polished gold", "Delicate layering chain in rose gold", "Freshwater pearl studs set in 14k gold", "Oval sapphire surrounded by diamond halo", "Hand-twisted sterling silver bangle", "Classic round diamond in platinum setting", "Ethiopian opal charms on gold-fill chain", "Vintage-inspired ruby cluster in yellow gold", "Channel-set emeralds in white gold", "Iridescent moonstone on silk cord choker", "Statement blue topaz in cocktail setting", "Mini garnet huggie hoop earrings", "Natural turquoise in sterling silver cuff", "Long amethyst Y-necklace, adjustable", "Sparkling citrine earring set, 14k gold", "Color-changing alexandrite, rare gemstone"];
  } else if (lower.includes("furniture") || lower.includes("home decor") || lower.includes("decor")) {
    productNames = ["Nordic Lounge Chair", "Marble Coffee Table", "Velvet Sofa Set", "Oak Bookshelf", "Ceramic Vase Set", "Linen Floor Lamp", "Walnut Dining Table", "Rattan Accent Chair", "Brass Wall Mirror", "Cotton Throw Blanket", "Teak Side Table", "Woven Storage Basket", "Concrete Planter", "Silk Cushion Set", "Industrial Bookend", "Terrazzo Tray", "Bamboo Room Divider", "Copper Candle Holder", "Sheepskin Rug", "Ceramic Table Lamp"];
    productDescs = ["Scandinavian-inspired minimalist armchair", "Italian marble top with brass legs", "Three-seater in deep emerald velvet", "Solid oak with adjustable shelves", "Handcrafted trio in earth tones", "Natural linen shade with wooden base", "Solid walnut seats 8, live-edge detail", "Hand-woven rattan with cushioned seat", "Hammered brass frame, 36-inch diameter", "100% organic cotton in neutral tones", "Reclaimed teak with tapered legs", "Seagrass basket with leather handles", "Minimalist concrete planter, drainage hole", "Set of 4 silk cushions in jewel tones", "Cast iron bookends, geometric design", "Handmade terrazzo serving tray", "Folding bamboo screen, 3 panels", "Polished copper with matte finish", "Genuine sheepskin, ivory white, 2x3ft", "Glazed ceramic lamp with linen shade"];
  } else if (lower.includes("laptop") || lower.includes("computer") || lower.includes("electronic") || lower.includes("gadget")) {
    productNames = ["ProBook Ultra 15", "AirSlim Notebook", "GamerX Turbo", "Studio Creator Pro", "Budget Lite 14", "Convertible Flex 360", "WorkStation X1", "ChromeBook Edu", "PowerBook Max 17", "Ultra Portable Mini", "Developer Elite", "Student Essential", "AI Companion Tab", "Streaming Deck Pro", "E-Reader Deluxe", "Smart Display Hub", "Wireless Charger Pad", "Noise Cancel Buds", "Portable Monitor 15", "Mechanical Keyboard"];
    productDescs = ["15.6\" 4K display, Intel i9, 32GB RAM", "Ultra-thin 2.2lb with all-day battery life", "RTX 4080, 240Hz display for pro gaming", "Color-accurate screen for creative pros", "Affordable everyday laptop, perfect for basics", "2-in-1 touchscreen with stylus support", "Enterprise-grade, 64GB RAM, ISV certified", "Cloud-ready, lightweight for education", "17\" large screen, desktop-replacement power", "11\" compact, fits in any bag, 5G ready", "Linux-optimized with 4K IPS panel", "Reliable laptop for school and college", "AI-powered tablet with voice assistant", "Multi-button streaming controller, RGB", "7\" e-ink display, weeks of battery life", "10\" smart display with video calling", "15W Qi2 wireless charger, MagSafe", "ANC earbuds, 30hr battery, IPX5", "Portable USB-C monitor, 1080p IPS", "Hot-swappable switches, PBT keycaps"];
  } else if (lower.includes("phone") || lower.includes("mobile") || lower.includes("smartphone")) {
    productNames = ["Pixel Ultra Pro", "Nova Slim X", "PowerMax 5G", "Camera King Z", "Budget Star A1", "Gaming Phone GT", "Fold X Premium", "Nano Mini SE", "Battery Beast Pro", "Night Mode Master", "AI Assistant Phone", "Eco Green Phone", "Titanium Edge", "Flip Compact", "Satellite Connect", "Ultra Rugged X", "Music Pro Max", "Security Shield", "Youth Edition", "Holographic Z"];
    productDescs = ["Flagship processor with AI photography", "Ultra-slim design, 6.1\" AMOLED display", "5000mAh battery with 65W fast charging", "200MP main camera with optical zoom", "Affordable 5G with premium build quality", "144Hz display, liquid cooling, game mode", "Foldable 7.6\" display, S-Pen support", "Compact one-hand phone, powerful specs", "6000mAh battery lasts 3 full days", "Exceptional low-light camera performance", "Built-in AI assistant for everything", "Made from recycled materials, carbon neutral", "Grade 5 titanium frame, ultra durable", "Clamshell flip, compact with cover display", "Emergency satellite messaging, off-grid ready", "IP69K rated, drop-proof to 6ft", "Hi-Fi DAC, dual speakers, Dolby Atmos", "Hardware security chip, encrypted storage", "Colorful, affordable, great first phone", "3D holographic display technology"];
  } else if (lower.includes("baby") || lower.includes("kid") || lower.includes("child")) {
    productNames = ["Organic Onesie Set", "Bamboo Swaddle Blanket", "Teething Ring Set", "Baby Monitor Pro", "Stroller Lite X", "Eco Diaper Pack", "Plush Comfort Bear", "Feeding Bottle Set", "Baby Bath Kit", "Nursery Mobile", "Growth Chart Wall Art", "First Shoes Soft Sole", "Wooden Block Set", "Baby Carrier Wrap", "Night Light Projector", "Musical Play Mat", "Sippy Cup Duo", "Baby Nail Clipper Kit", "Sensory Ball Set", "Organic Baby Food"];
    productDescs = ["100% organic cotton, gentle on baby skin", "Ultra-soft bamboo fabric, breathable design", "BPA-free silicone, soothing for gums", "HD camera, night vision, two-way audio", "Lightweight foldable stroller, one-hand fold", "Plant-based biodegradable diapers, pack of 60", "Hypoallergenic plush toy, machine washable", "Anti-colic bottles with natural flow nipples", "Gentle pH-balanced wash and lotion set", "Handcrafted wooden mobile with soft music", "Removable ruler canvas with cute animals", "Pre-walker shoes, flexible sole for tiny feet", "Natural wood blocks, non-toxic paint", "Ergonomic baby carrier, 4 positions", "Star projector with soothing lullabies", "Tummy time mat with crinkle toys", "Spill-proof silicone cups, easy grip", "Safe rounded-tip clippers with LED light", "Textured balls for motor skill development", "Stage 1 organic purées, variety pack"];
  } else if (lower.includes("wine") || lower.includes("vineyard")) {
    productNames = ["Château Reserve 2018", "Pinot Noir Selection", "Sauvignon Blanc Crisp", "Rosé Summer Blend", "Cabernet Grand Cru", "Sparkling Brut Gold", "Merlot Velvet", "Chardonnay Barrel", "Tempranillo Reserva", "Prosecco Estate", "Malbec Dark Ruby", "Riesling Late Harvest", "Zinfandel Bold", "Grüner Veltliner", "Champagne Vintage", "Port Ruby Reserve", "Albariño Coastal", "Syrah Smoky Hills", "Moscato Sweet", "Gewürztraminer Spice"];
    productDescs = ["Full-bodied Bordeaux with oak finish", "Elegant burgundy with cherry notes", "Zesty and refreshing, perfect for seafood", "Light and fruity, ideal for summer sipping", "Bold and structured, 24 months in oak", "Fine bubbles with citrus and brioche notes", "Smooth and round with plum flavors", "Creamy with vanilla and apple undertones", "Spanish classic, aged 18 months", "Light and effervescent from Italian hills", "Deep and intense from Argentine vineyards", "Sweet and aromatic with honey tones", "Jammy zinfandel with pepper spice", "Austrian crisp white, green apple notes", "Prestige cuvée, 36 months on lees", "Rich ruby port, fireside sipper", "Spanish coastal white, mineral finish", "Smoky dark fruit from hillside vines", "Sweet and bubbly, dessert perfect", "Aromatic lychee and rose petal notes"];
  } else if (lower.includes("book") || lower.includes("novel")) {
    productNames = ["Midnight Chronicles", "The Last Garden", "Code & Canvas", "Whispers of Time", "Ocean's Memory", "The Silent Path", "Starlight Academy", "Urban Legends Vol.1", "The Art of Less", "Wild Horizons", "Digital Dawn", "Poetry Unbound", "Shadow Weaver", "The Glass Tower", "Letters Unsent", "Parallel Lines", "The Alchemist's Map", "Roots & Wings", "Neon City Blues", "The Forgotten Shore"];
    productDescs = ["Bestselling thriller, 500+ pages of suspense", "Heartwarming literary fiction, award winner", "Where technology meets creativity, nonfiction", "Historical romance spanning three centuries", "Marine biology adventure, beautifully illustrated", "Mindfulness and meditation guide, hardcover", "Young adult fantasy, first in trilogy", "Collection of modern short stories", "Minimalist living philosophy, practical guide", "Travel photography and essays, coffee table book", "Sci-fi epic about AI and humanity's future", "Contemporary poetry collection, signed edition", "Dark fantasy with intricate world-building", "Corporate thriller with unexpected twists", "Epistolary novel, deeply emotional", "Two parallel stories converging, literary fiction", "Adventure fantasy with puzzle elements", "Memoir about identity and belonging", "Cyberpunk noir detective story", "Coastal mystery with atmospheric prose"];
  } else if (lower.includes("watch") || lower.includes("timepiece")) {
    productNames = ["Classic Chronograph", "Diver Pro 200m", "Minimalist Slim", "Pilot Heritage", "Moonphase Elite", "Digital Sport X", "Rose Gold Dress", "Skeleton Automatic", "Field Explorer", "Racing Tachymeter", "Solar Eco-Drive", "Tourbillon Reserve", "GMT Traveler", "Ceramic Black", "Bronze Patina", "Regatta Timer", "Nurse Medical", "Diamond Bezel", "Titanium Ultra", "Vintage Reissue"];
    productDescs = ["Swiss-made automatic, sapphire crystal", "Water-resistant to 200m, ceramic bezel", "Ultra-thin 6.5mm case, mesh bracelet", "Vintage-inspired aviation chronograph", "Complication with lunar phase display", "GPS, heart rate, 14-day battery life", "18k rose gold case, Italian leather strap", "Exhibition caseback, visible movement", "Titanium case, luminous hands & markers", "Precision tachymeter, motorsport heritage", "Light-powered, never needs battery change", "Hand-assembled, limited to 50 pieces", "Dual timezone with rotating bezel", "Full ceramic case, scratch-resistant", "Living bronze that develops unique patina", "Countdown timer for sailing events", "Pulsometer scale, easy-read dial", "Factory-set diamond bezel, 36mm", "Grade 2 titanium, featherweight", "Faithful reproduction of 1960s classic"];
  } else if (lower.includes("perfume") || lower.includes("cologne") || lower.includes("fragrance")) {
    productNames = ["Midnight Oud", "Rose Garden", "Ocean Breeze", "Amber Luxe", "Cedar & Sage", "Vanilla Orchid", "Noir Intense", "Fresh Linen", "Jasmine Dream", "Sandalwood Gold", "Citrus Burst", "Velvet Musk", "Tobacco Leather", "Fig & Iris", "White Tea Zen", "Patchouli Earth", "Bergamot Sun", "Cherry Blossom", "Smoky Vetiver", "Tuberose Night"];
    productDescs = ["Rich oud with smoky undertones, 100ml EDP", "Damask rose with dewy green notes", "Sea salt, driftwood and coastal air", "Warm amber with tonka bean finish", "Woody cedar balanced with aromatic sage", "Sweet vanilla with exotic orchid bloom", "Deep and mysterious evening scent", "Clean, crisp, everyday freshness", "Intoxicating jasmine with white tea", "Creamy sandalwood with golden spice", "Energizing lemon, bergamot and grapefruit", "Sensual musk with powder soft-finish", "Bold tobacco with leather accord", "Mediterranean fig with powdery iris", "Delicate white tea, minimalist beauty", "Earthy patchouli with warm spices", "Bright bergamot with sunny warmth", "Soft cherry blossom, springtime fresh", "Smoky vetiver with amber depth", "Heady tuberose for evening allure"];
  } else if (lower.includes("toy") || lower.includes("plaything")) {
    productNames = ["Building Block Set", "Plush Teddy Bear", "RC Racing Car", "Puzzle Adventure 500pc", "Art Supply Kit", "Board Game Classic", "Doll House Deluxe", "Science Lab Kit", "Wooden Train Set", "Space Rocket Model", "Musical Keyboard", "Outdoor Explorer Kit", "Robot Coding Kit", "Marble Run Tower", "Craft Bead Set", "Puppet Theater", "Dinosaur Figurines", "Magnetic Tiles", "Play Kitchen Set", "Kite Flyer Pro"];
    productDescs = ["300+ pieces, STEM-building creativity", "Ultra-soft, hypoallergenic, 18-inch plush", "2.4GHz remote, 20mph, rechargeable battery", "Beautifully illustrated, family-friendly fun", "Paints, brushes, canvas and everything to create", "Strategy game for 2-6 players, ages 8+", "3-story dollhouse with furniture included", "20 real experiments, safe for ages 6+", "Hand-painted wooden pieces, expandable tracks", "1:72 scale model kit with display stand", "37 keys, built-in songs, record function", "Binoculars, compass, magnifying glass, backpack", "Programmable robot, learns coding basics", "100-piece marble run, gravity-powered fun", "500+ beads with patterns and loom", "Foldable theater with 4 hand puppets", "12-piece set, scientifically accurate", "60-piece magnetic building tiles, 3D shapes", "Realistic play kitchen with accessories", "Delta kite, easy to fly, ripstop nylon"];
  } else if (lower.includes("grocery") || lower.includes("organic") || lower.includes("fresh produce")) {
    productNames = ["Organic Avocado Box", "Farm Fresh Eggs", "Artisan Bread Loaf", "Mixed Berry Basket", "Cold Press Juice Set", "Local Honey Jar", "Quinoa Superfood", "Olive Oil Premium", "Dried Fruit Mix", "Organic Tea Sampler", "Almond Butter Fresh", "Seasonal Veggie Box", "Granola Crunch Mix", "Coconut Water Pack", "Sourdough Starter", "Truffle Salt Jar", "Protein Bar Variety", "Kombucha Sampler", "Chia Seed Pouch", "Maple Syrup Grade A"];
    productDescs = ["6 perfectly ripe Hass avocados, organic", "Free-range, pasture-raised, dozen pack", "Sourdough baked daily, no preservatives", "Strawberries, blueberries, raspberries, organic", "6-pack cold pressed juices, no sugar added", "Raw, unfiltered wildflower honey, 16oz", "Organic white quinoa, 2lb bag, high protein", "Extra virgin, cold-pressed, Italian import", "Mango, pineapple, coconut, no sulfites", "12 single-origin tea bags, organic blends", "Stone-ground, no salt, 12oz jar", "Weekly rotating selection, 8-10 items", "Oat and nut granola, lightly sweetened", "100% coconut water, electrolyte-rich, 6-pack", "Active sourdough starter with guide", "Hand-harvested black truffle sea salt", "12-bar variety, plant-based protein", "4-flavor fermented tea sampler", "Organic chia seeds, omega-3 rich, 16oz", "Vermont pure maple syrup, 12oz bottle"];
  } else {
    const cleanTopic = extractTopic(topic);
    const cleanLower = cleanTopic.toLowerCase();
    productNames = [`Premium ${cleanTopic}`, `Classic ${cleanTopic}`, `Artisan ${cleanTopic}`, `Elite ${cleanTopic}`, `Signature ${cleanTopic}`, `Limited ${cleanTopic}`, `Deluxe ${cleanTopic}`, `Essential ${cleanTopic}`, `Heritage ${cleanTopic}`, `Modern ${cleanTopic}`, `Craft ${cleanTopic}`, `Select ${cleanTopic}`, `Vintage ${cleanTopic}`, `Pro ${cleanTopic}`, `Studio ${cleanTopic}`, `Reserve ${cleanTopic}`, `Custom ${cleanTopic}`, `Original ${cleanTopic}`, `Ultra ${cleanTopic}`, `Grand ${cleanTopic}`];
    productDescs = [
      `Our flagship ${cleanLower} crafted with premium materials`,
      `Timeless ${cleanLower} for everyday elegance`,
      `Handcrafted ${cleanLower} with artisan quality`,
      `Top-tier ${cleanLower} for the discerning customer`,
      `Our signature ${cleanLower} — bestseller worldwide`,
      `Limited edition ${cleanLower} — exclusive release`,
      `Luxury ${cleanLower} with gold-standard finishing`,
      `Everyday essential ${cleanLower} at an amazing value`,
      `Heritage-inspired ${cleanLower} with classic appeal`,
      `Contemporary ${cleanLower} with minimalist design`,
      `Small-batch crafted ${cleanLower} — truly unique`,
      `Carefully selected ${cleanLower} for the connoisseur`,
      `Vintage-inspired ${cleanLower} with retro charm`,
      `Professional-grade ${cleanLower} for experts`,
      `Studio-quality ${cleanLower} with refined finish`,
      `Reserve collection ${cleanLower} — rare and special`,
      `Custom-made ${cleanLower} tailored to perfection`,
      `The original ${cleanLower} that started it all`,
      `Ultra-premium ${cleanLower} with no compromises`,
      `Grand edition ${cleanLower} — our finest offering`,
    ];
  }

  const prices = ["$24.99", "$39.99", "$54.99", "$18.99", "$79.99", "$32.99", "$42.99", "$27.99", "$64.99", "$21.99", "$49.99", "$36.99", "$44.99", "$29.99", "$89.99", "$15.99", "$59.99", "$34.99", "$74.99", "$22.99", "$45.99", "$67.99", "$19.99", "$52.99", "$38.99", "$71.99", "$26.99", "$83.99", "$31.99", "$47.99", "$55.99", "$14.99", "$62.99", "$41.99", "$76.99"];
  const badges = ["Bestseller", "New", "Sale", "", "Limited", "", "Hot", "New", "", "Popular", "Sale", "", "Trending", "", "Staff Pick", "New", "", "Exclusive", "", "Hot", "Top Rated", "", "Flash Sale", "New", "", "Editor's Pick", "", "Premium", "", "Must Have", "Clearance", "", "Viral", "", ""];
  
  // Extend to 35 products by adding more variants
  const extraPrefixes = ["Luxe", "Royal", "Prime", "Noble", "Supreme", "Platinum", "Opulent", "Curated", "Bespoke", "Iconic", "Refined", "Exquisite", "Majestic", "Prestige", "Sovereign"];
  const cleanT = typeof productNames[0] === 'string' && productNames.length > 0 ? '' : '';
  while (productNames.length < 35) {
    const idx = productNames.length - 20;
    const prefix = extraPrefixes[idx % extraPrefixes.length];
    const baseName = productNames[idx % 20];
    // Derive new name from existing pattern
    const parts = baseName.split(' ');
    parts[0] = prefix;
    productNames.push(parts.join(' '));
    productDescs.push(productDescs[idx % productDescs.length]);
  }

  return productNames.map((name, i) => ({
    name,
    price: prices[i % prices.length],
    description: productDescs[i % productDescs.length],
    image: nextImg(500, 500),
    badge: badges[i % badges.length],
  }));
}

function generateRestaurantMenu(topic: string, rand: () => number) {
  const lower = topic.toLowerCase();
  if (lower.includes("tea") || lower.includes("cafe") || lower.includes("coffee")) {
    return [
      { name: "Classic English Breakfast", price: "$4.50", description: "Full-bodied blend of Assam and Ceylon", category: "Hot Teas" },
      { name: "Iced Matcha Latte", price: "$6.00", description: "Ceremonial grade matcha with oat milk", category: "Cold Drinks" },
      { name: "Jasmine Pearl", price: "$5.50", description: "Hand-rolled pearls, delicate floral aroma", category: "Hot Teas" },
      { name: "Chai Spice Latte", price: "$5.00", description: "Traditional spiced chai with steamed milk", category: "Hot Drinks" },
      { name: "Honey Lavender Scone", price: "$4.00", description: "Freshly baked with local honey", category: "Pastries" },
      { name: "Matcha Cheesecake", price: "$7.50", description: "Creamy Japanese-inspired dessert", category: "Desserts" },
    ];
  }
  if (lower.includes("pizza") || lower.includes("italian")) {
    return [
      { name: "Margherita DOP", price: "$16", description: "San Marzano tomatoes, fior di latte, fresh basil", category: "Pizza" },
      { name: "Truffle Mushroom", price: "$22", description: "Wild mushroom medley with truffle oil", category: "Pizza" },
      { name: "Burrata Caprese", price: "$14", description: "Creamy burrata with heirloom tomatoes", category: "Antipasti" },
      { name: "Pappardelle Bolognese", price: "$19", description: "Slow-cooked ragù with handmade pasta", category: "Pasta" },
      { name: "Tiramisu", price: "$11", description: "Classic layered espresso mascarpone dessert", category: "Dolci" },
      { name: "Limoncello Spritz", price: "$13", description: "House limoncello, prosecco, soda", category: "Cocktails" },
    ];
  }
  return [
    { name: "House Signature", price: "$18", description: `Our chef's signature ${lower} creation`, category: "Mains" },
    { name: "Seasonal Special", price: "$22", description: "Rotating dish with market-fresh ingredients", category: "Mains" },
    { name: "Garden Appetizer", price: "$12", description: "Locally sourced vegetables, artisan preparation", category: "Starters" },
    { name: "Craft Cocktail", price: "$14", description: "Hand-mixed seasonal cocktail", category: "Drinks" },
    { name: "Artisan Dessert", price: "$11", description: "Pastry chef's daily creation", category: "Desserts" },
    { name: "Tasting Platter", price: "$16", description: "Curated selection of house specialties", category: "Starters" },
  ];
}

const taglineTemplates: Record<BusinessType, ((t: string) => string)[]> = {
  ecommerce: [
    (t) => `Shop Premium ${t} Online`,
    (t) => `Discover Curated ${t} Collections`,
    (t) => `${t} — Handpicked for You`,
    (t) => `Your Destination for Fine ${t}`,
    (t) => `Elevate Your Style with ${t}`,
    (t) => `The ${t} You've Been Looking For`,
    (t) => `Premium ${t}, Delivered to Your Door`,
    (t) => `Where Quality ${t} Finds You`,
  ],
  restaurant: [
    (t) => `A Culinary ${t} Experience`,
    (t) => `Taste the Art of ${t}`,
    (t) => `${t} — Crafted with Love`,
    (t) => `Where Every ${t} Tells a Story`,
    (t) => `Savor the Finest ${t}`,
    (t) => `The ${t} Experience, Reimagined`,
  ],
  portfolio: [
    (t) => `${t} That Captivates`,
    (t) => `See the World Through ${t}`,
    (t) => `${t} — Visual Storytelling`,
    (t) => `Crafting ${t} with Purpose`,
    (t) => `The Art of ${t}`,
  ],
  saas: [
    (t) => `${t} — Supercharged`,
    (t) => `The Smarter Way to ${t}`,
    (t) => `Automate Your ${t} Workflow`,
    (t) => `${t} Intelligence, Simplified`,
    (t) => `Scale Your ${t} Today`,
  ],
  service: [
    (t) => `Discover the World of ${t}`,
    (t) => `Experience ${t} Like Never Before`,
    (t) => `Your Ultimate ${t} Destination`,
    (t) => `Redefining ${t} Excellence`,
    (t) => `Where ${t} Meets Innovation`,
    (t) => `Elevate Your ${t} Journey`,
    (t) => `The Future of ${t} Starts Here`,
    (t) => `Unleash the Power of ${t}`,
    (t) => `${t} — Crafted to Perfection`,
    (t) => `The Art & Soul of ${t}`,
    (t) => `${t}, Reimagined for You`,
    (t) => `Step Into the ${t} Experience`,
  ],
  blog: [
    (t) => `The ${t} Insider`,
    (t) => `Stories of ${t}`,
    (t) => `${t} — Read, Learn, Grow`,
    (t) => `Fresh Perspectives on ${t}`,
    (t) => `Your Daily Dose of ${t}`,
  ],
  education: [
    (t) => `Master ${t} Today`,
    (t) => `Learn ${t} From Experts`,
    (t) => `${t} — Knowledge Unleashed`,
    (t) => `Your ${t} Learning Journey`,
    (t) => `Transform Through ${t}`,
  ],
  fitness: [
    (t) => `Unleash Your ${t} Potential`,
    (t) => `${t} — Stronger Every Day`,
    (t) => `Transform with ${t}`,
    (t) => `Peak ${t} Performance`,
    (t) => `Your ${t} Journey Starts Here`,
  ],
  agency: [
    (t) => `${t} That Drives Results`,
    (t) => `Strategic ${t} Partners`,
    (t) => `${t} — Bold Ideas, Real Impact`,
    (t) => `Elevating Brands Through ${t}`,
    (t) => `The ${t} Agency You Need`,
  ],
  nonprofit: [
    (t) => `${t} for a Better World`,
    (t) => `Together for ${t}`,
    (t) => `Making ${t} Matter`,
    (t) => `${t} — Hope in Action`,
    (t) => `Change Through ${t}`,
  ],
};

const introSubtitles = [
  (t: string) => `Crafted with passion for ${t.toLowerCase()}`,
  (t: string) => `A new era of ${t.toLowerCase()} begins`,
  (t: string) => `Where excellence meets ${t.toLowerCase()}`,
  (t: string) => `Inspiring the world through ${t.toLowerCase()}`,
  (t: string) => `Innovation in ${t.toLowerCase()}, perfected`,
  (t: string) => `Your vision of ${t.toLowerCase()}, realized`,
  (t: string) => `The pinnacle of ${t.toLowerCase()} artistry`,
  (t: string) => `${t} — designed with intention`,
];

const introDescriptions = [
  (t: string) => `Every detail has been thoughtfully designed to showcase the beauty and depth of ${t.toLowerCase()}. Welcome to an experience crafted just for you.`,
  (t: string) => `We've poured creativity and expertise into building a stunning digital presence for ${t.toLowerCase()}. Prepare to be amazed.`,
  (t: string) => `From concept to creation, this ${t.toLowerCase()} experience has been built to inspire, engage, and leave a lasting impression.`,
  (t: string) => `Step into a world where ${t.toLowerCase()} comes alive through thoughtful design, rich content, and seamless interactions.`,
  (t: string) => `This is more than a website — it's a curated journey through the finest aspects of ${t.toLowerCase()}, designed to captivate.`,
  (t: string) => `Immerse yourself in a meticulously crafted ${t.toLowerCase()} experience where every pixel tells a story of excellence.`,
];

const colorSchemes = [
  { primary: "#2a9d8f", accent: "#e76f51", bg: "#faf8f5", dark: "#1a1a2e" },
  { primary: "#6366f1", accent: "#f59e0b", bg: "#f8f7ff", dark: "#1e1b4b" },
  { primary: "#059669", accent: "#ec4899", bg: "#f0fdf4", dark: "#022c22" },
  { primary: "#0ea5e9", accent: "#f97316", bg: "#f0f9ff", dark: "#0c1929" },
  { primary: "#8b5cf6", accent: "#10b981", bg: "#faf5ff", dark: "#1a0a3e" },
  { primary: "#d946ef", accent: "#14b8a6", bg: "#fdf4ff", dark: "#2e0a38" },
  { primary: "#e11d48", accent: "#2563eb", bg: "#fff1f2", dark: "#2a0a14" },
  { primary: "#ca8a04", accent: "#7c3aed", bg: "#fefce8", dark: "#1c1a04" },
  { primary: "#1d4ed8", accent: "#f43f5e", bg: "#eff6ff", dark: "#0a1930" },
  { primary: "#7e22ce", accent: "#f59e0b", bg: "#faf5ff", dark: "#1a0536" },
  { primary: "#0d9488", accent: "#e11d48", bg: "#f0fdfa", dark: "#042f2e" },
  { primary: "#b45309", accent: "#6366f1", bg: "#fffbeb", dark: "#1c1106" },
  { primary: "#16a34a", accent: "#db2777", bg: "#f0fdf4", dark: "#052e16" },
  { primary: "#dc2626", accent: "#0891b2", bg: "#fef2f2", dark: "#1c0a0a" },
];

/* ── Font pairs ── */
const fontPairs = [
  { display: "'Cormorant Garamond', serif", body: "'DM Sans', sans-serif" },
  { display: "'Cinzel', serif", body: "'Raleway', sans-serif" },
  { display: "'Playfair Display', serif", body: "'DM Sans', sans-serif" },
  { display: "'Lora', serif", body: "'Poppins', sans-serif" },
  { display: "'Montserrat', sans-serif", body: "'DM Sans', sans-serif" },
];

/* ── Contextual subtitles per business type ── */
function generateSubtitle(topic: string, siteName: string, businessType: BusinessType, rand: () => number): string {
  const templates: Record<BusinessType, string[]> = {
    ecommerce: [
      `Discover our handpicked collection of premium ${topic.toLowerCase()}. Free shipping on orders over $50. Shop the latest arrivals today.`,
      `Browse ${siteName}'s curated selection of ${topic.toLowerCase()}. Quality you can trust, delivered to your doorstep.`,
      `Explore unique ${topic.toLowerCase()} crafted with care. Join thousands of happy customers worldwide.`,
    ],
    restaurant: [
      `Welcome to ${siteName} — where every dish tells a story. Fresh ingredients, bold flavors, and a dining experience you'll never forget.`,
      `Indulge in our carefully crafted ${topic.toLowerCase()} menu. Reserve your table or order online for pickup and delivery.`,
      `From farm to table, we bring you the finest ${topic.toLowerCase()} experience. Open daily for dine-in, takeout & catering.`,
    ],
    portfolio: [
      `Award-winning ${topic.toLowerCase()} that speaks for itself. Let's collaborate and bring your vision to life.`,
      `Over a decade of creating stunning ${topic.toLowerCase()}. Every project is a new story waiting to be told.`,
      `${siteName} — capturing moments, creating memories. Available for bookings worldwide.`,
    ],
    saas: [
      `The all-in-one ${topic.toLowerCase()} platform trusted by 10,000+ teams. Start your free trial today — no credit card required.`,
      `Streamline your ${topic.toLowerCase()} workflow with powerful tools, smart automation, and real-time analytics.`,
      `Built for modern teams who demand the best. ${siteName} transforms how you approach ${topic.toLowerCase()}.`,
    ],
    service: [
      `We bring passion, innovation, and excellence to every aspect of ${topic.toLowerCase()}. Discover what makes us the preferred choice for thousands worldwide.`,
      `Premium ${topic.toLowerCase()} services tailored to your needs. Experience the difference that expertise and dedication make.`,
      `Your trusted partner for exceptional ${topic.toLowerCase()}. Quality, innovation, and personalized attention — every single time.`,
    ],
    blog: [
      `${siteName} is your go-to source for the latest ${topic.toLowerCase()} insights, stories, and expert analysis.`,
      `Dive deep into the world of ${topic.toLowerCase()} with thoughtful articles, interviews, and curated content.`,
      `Join 50,000+ readers who trust ${siteName} for fresh perspectives on ${topic.toLowerCase()}.`,
    ],
    education: [
      `${siteName} offers world-class ${topic.toLowerCase()} courses taught by industry experts. Start learning today.`,
      `Master ${topic.toLowerCase()} at your own pace with interactive lessons, real projects, and expert mentorship.`,
      `Join thousands of students who have transformed their careers through ${siteName}'s ${topic.toLowerCase()} programs.`,
    ],
    fitness: [
      `Welcome to ${siteName} — your ultimate ${topic.toLowerCase()} destination. Train smarter, get stronger, feel amazing.`,
      `Expert-led ${topic.toLowerCase()} programs designed to transform your body and mind. Join our community today.`,
      `From beginner to advanced, ${siteName} has the perfect ${topic.toLowerCase()} program for your goals.`,
    ],
    agency: [
      `${siteName} is a full-service ${topic.toLowerCase()} agency helping brands grow through strategy, creativity, and data.`,
      `We partner with ambitious brands to deliver ${topic.toLowerCase()} solutions that drive measurable results.`,
      `From startups to Fortune 500, ${siteName} has been the go-to ${topic.toLowerCase()} agency for 15+ years.`,
    ],
    nonprofit: [
      `${siteName} is dedicated to making a difference through ${topic.toLowerCase()}. Together, we can change lives.`,
      `For over a decade, we've been at the forefront of ${topic.toLowerCase()}, impacting communities worldwide.`,
      `Join our mission to create lasting change through ${topic.toLowerCase()}. Every contribution matters.`,
    ],
  };
  return pick(templates[businessType], rand);
}

/* ── Inspirational hero quotes per business type ── */
function generateHeroQuote(topic: string, businessType: BusinessType, rand: () => number): string {
  const t = topic.toLowerCase();
  const quotes: Record<BusinessType, string[]> = {
    ecommerce: [
      `"Where quality meets elegance — ${t} redefined."`,
      `"Every piece tells a story. Discover yours in ${t}."`,
      `"Crafted with passion, delivered with pride — the finest ${t}."`,
    ],
    restaurant: [
      `"Life is too short for ordinary food. Taste the extraordinary."`,
      `"Where every flavor tells a story of ${t}."`,
      `"Good food, great company — the essence of ${t}."`,
    ],
    portfolio: [
      `"Creativity is intelligence having fun — through ${t}."`,
      `"Every project is a canvas, every detail a brushstroke."`,
      `"Where vision meets craft — ${t} at its finest."`,
    ],
    saas: [
      `"The future of ${t} starts here."`,
      `"Simplify. Automate. Dominate — with smarter ${t}."`,
      `"Innovation is not optional, it's essential."`,
    ],
    service: [
      `"Excellence is not an act, but a habit — in ${t}."`,
      `"Your vision, our expertise — ${t} perfected."`,
      `"Where dedication meets distinction in ${t}."`,
    ],
    blog: [
      `"Stories that inspire. Ideas that transform. ${t} explored."`,
      `"In the world of ${t}, knowledge is power."`,
      `"Perspectives that matter — ${t} unpacked."`,
    ],
    education: [
      `"The beautiful thing about learning is that no one can take it away."`,
      `"Master ${t}. Transform your future."`,
      `"Knowledge of ${t} is the greatest investment."`,
    ],
    fitness: [
      `"Stronger every day. The ${t} journey starts now."`,
      `"Push your limits. Redefine what's possible in ${t}."`,
      `"Your body can do it. It's your mind you need to convince."`,
    ],
    agency: [
      `"Bold ideas. Brilliant execution. ${t} reimagined."`,
      `"We don't follow trends in ${t} — we set them."`,
      `"Where strategy meets creativity in ${t}."`,
    ],
    nonprofit: [
      `"Together, we can change the world through ${t}."`,
      `"Small acts of ${t}, multiplied by millions, transform the world."`,
      `"Be the change you wish to see — through ${t}."`,
    ],
  };
  return pick(quotes[businessType], rand);
}

function getNavLinks(businessType: BusinessType): string[] {
  // These labels map to actual rendered section IDs via navLabelToId
  const navMap: Record<BusinessType, string[]> = {
    ecommerce: ["Home", "Shop", "About", "Gallery", "Reviews", "Blog", "Contact"],
    restaurant: ["Home", "Menu", "About", "Gallery", "Reviews", "Blog", "Contact"],
    portfolio: ["Home", "Services", "About", "Gallery", "Reviews", "Blog", "Contact"],
    saas: ["Home", "Features", "About", "Pricing", "Reviews", "Blog", "Contact"],
    service: ["Home", "About", "Services", "Features", "Gallery", "Reviews", "Blog", "Contact"],
    blog: ["Home", "About", "Gallery", "Reviews", "Blog", "Contact"],
    education: ["Home", "Features", "About", "Reviews", "Pricing", "Blog", "Contact"],
    fitness: ["Home", "About", "Features", "Gallery", "Reviews", "Pricing", "Contact"],
    agency: ["Home", "Services", "About", "Gallery", "Reviews", "Blog", "Contact"],
    nonprofit: ["Home", "About", "Gallery", "Reviews", "Blog", "Contact"],
  };
  return navMap[businessType];
}

/* ── Contextual features ── */
function generateFeatures(topic: string, businessType: BusinessType) {
  const t = topic.toLowerCase();
  const featMap: Record<BusinessType, { title: string; description: string; icon: string }[]> = {
    ecommerce: [
      { title: "Free Shipping", description: `Free delivery on all ${t} orders over $50. Fast, reliable, worldwide.`, icon: "🚚" },
      { title: "Premium Quality", description: `Every ${t} product passes our rigorous 10-point quality check.`, icon: "✨" },
      { title: "Easy Returns", description: `Not satisfied? Return any ${t} within 30 days for a full refund.`, icon: "↩️" },
      { title: "Secure Checkout", description: "SSL-encrypted payments via all major cards, Apple Pay & Google Pay.", icon: "🔒" },
      { title: "Gift Wrapping", description: `Beautiful gift packaging available for all ${t} products.`, icon: "🎁" },
      { title: "Loyalty Rewards", description: "Earn points on every purchase. Redeem for discounts and exclusives.", icon: "⭐" },
    ],
    restaurant: [
      { title: "Fresh Ingredients", description: "Locally sourced, organic ingredients selected daily from trusted farms.", icon: "🌿" },
      { title: "Expert Chefs", description: `Our award-winning chefs bring years of ${t} culinary mastery.`, icon: "👨‍🍳" },
      { title: "Online Ordering", description: "Order ahead for pickup or delivery. Skip the wait, enjoy at home.", icon: "📱" },
      { title: "Private Events", description: "Host your celebrations in our elegant private dining spaces.", icon: "🎉" },
      { title: "Daily Specials", description: "New seasonal specials every day, crafted with market-fresh produce.", icon: "📋" },
      { title: "Catering Service", description: "Professional catering for events of all sizes. Custom menus available.", icon: "🍽️" },
    ],
    portfolio: [
      { title: "Custom Projects", description: `Bespoke ${t} tailored to your brand's unique identity and vision.`, icon: "🎨" },
      { title: "Fast Turnaround", description: "Professional results delivered on schedule, every single time.", icon: "⚡" },
      { title: "Award Winning", description: `Internationally recognized ${t} work with 50+ industry awards.`, icon: "🏆" },
      { title: "Full Rights", description: "You own all deliverables — full commercial rights included.", icon: "📜" },
      { title: "Revisions Included", description: "Up to 3 rounds of revisions to ensure perfect results.", icon: "🔄" },
      { title: "Global Clients", description: `Serving ${t} clients across 40+ countries worldwide.`, icon: "🌍" },
    ],
    saas: [
      { title: "Real-time Analytics", description: `Deep insights into your ${t} performance with live dashboards.`, icon: "📊" },
      { title: "API Access", description: "Full REST API for seamless integration with your existing tools.", icon: "🔗" },
      { title: "Team Collaboration", description: "Built-in collaboration tools for teams of any size.", icon: "👥" },
      { title: "99.9% Uptime", description: "Enterprise-grade infrastructure with guaranteed reliability.", icon: "🛡️" },
      { title: "Smart Automation", description: `Automate repetitive ${t} tasks and save hours every week.`, icon: "🤖" },
      { title: "Priority Support", description: "24/7 dedicated support team with average 5-minute response time.", icon: "💬" },
    ],
    service: [
      { title: "Premium Quality", description: `Experience the highest standards in ${t}. Our commitment to excellence ensures every detail is perfected.`, icon: "🎯" },
      { title: "Innovation First", description: `We push boundaries and embrace cutting-edge approaches to deliver fresh perspectives on ${t}.`, icon: "⚡" },
      { title: "Expert Team", description: `Our skilled professionals bring deep expertise and passion for ${t} to every project.`, icon: "🛡️" },
      { title: "24/7 Support", description: "Round-the-clock assistance ensures you always have guidance and peace of mind.", icon: "🌟" },
      { title: "Custom Solutions", description: `Every client is unique. We tailor our ${t} services to match your exact needs.`, icon: "🔧" },
      { title: "Global Reach", description: `Connecting people worldwide through our comprehensive ${t} platform.`, icon: "🚀" },
    ],
    blog: [
      { title: "Expert Writers", description: `Our team of ${t} experts delivers insightful, well-researched content.`, icon: "✍️" },
      { title: "Weekly Updates", description: `Fresh ${t} articles published every week to keep you informed.`, icon: "📅" },
      { title: "Reader Community", description: "Join thousands of engaged readers in our thriving community.", icon: "👥" },
      { title: "Newsletter", description: `Get the best ${t} content delivered straight to your inbox.`, icon: "📧" },
      { title: "Guest Authors", description: `Industry leaders share their ${t} perspectives and insights.`, icon: "🎤" },
      { title: "Free Resources", description: `Downloadable guides, templates, and checklists for ${t}.`, icon: "📥" },
    ],
    education: [
      { title: "Expert Instructors", description: `Learn ${t} from industry professionals with real-world experience.`, icon: "👨‍🏫" },
      { title: "Self-Paced Learning", description: `Study ${t} at your own speed with lifetime access to all materials.`, icon: "⏱️" },
      { title: "Certificates", description: `Earn recognized certificates to showcase your ${t} expertise.`, icon: "🎓" },
      { title: "Live Sessions", description: `Interactive live classes with Q&A for deeper ${t} understanding.`, icon: "📹" },
      { title: "Project-Based", description: `Build real ${t} projects to strengthen your portfolio.`, icon: "🛠️" },
      { title: "Community", description: "Connect with fellow learners, share progress, and collaborate.", icon: "🤝" },
    ],
    fitness: [
      { title: "Expert Trainers", description: `Certified ${t} coaches to guide your transformation journey.`, icon: "💪" },
      { title: "Custom Programs", description: `Personalized ${t} programs designed for your specific goals.`, icon: "📋" },
      { title: "Nutrition Plans", description: "Meal plans and nutrition guidance to fuel your performance.", icon: "🥗" },
      { title: "Progress Tracking", description: `Track your ${t} progress with detailed analytics and milestones.`, icon: "📊" },
      { title: "Group Classes", description: `Energizing group ${t} sessions for motivation and fun.`, icon: "🏋️" },
      { title: "24/7 Access", description: "Train on your schedule with round-the-clock facility access.", icon: "🕐" },
    ],
    agency: [
      { title: "Strategy First", description: `Data-driven ${t} strategies that align with your business goals.`, icon: "🎯" },
      { title: "Creative Excellence", description: `Award-winning ${t} creative that captures attention and drives action.`, icon: "🏆" },
      { title: "Full Service", description: `End-to-end ${t} services from concept to execution and beyond.`, icon: "🔄" },
      { title: "Dedicated Team", description: `A focused team of ${t} specialists assigned to your brand.`, icon: "👥" },
      { title: "Measurable Results", description: `Real-time reporting and analytics to prove ${t} ROI.`, icon: "📈" },
      { title: "Agile Process", description: "Fast iterations and adaptability to keep pace with your market.", icon: "⚡" },
    ],
    nonprofit: [
      { title: "Transparent Impact", description: `See exactly how your contribution supports ${t} initiatives.`, icon: "🔍" },
      { title: "Community Programs", description: `Local and global ${t} programs creating lasting change.`, icon: "🌍" },
      { title: "Volunteer Network", description: `Join our network of volunteers passionate about ${t}.`, icon: "🤲" },
      { title: "Regular Updates", description: "Monthly impact reports and stories from the field.", icon: "📬" },
      { title: "Tax Deductible", description: "All donations are tax-deductible. Receipts provided instantly.", icon: "📝" },
      { title: "Events & Galas", description: `Fundraising events and galas to support our ${t} mission.`, icon: "🎪" },
    ],
  };
  return featMap[businessType];
}

/* ── Contextual services ── */
function generateServices(topic: string, businessType: BusinessType, nextImg: (w: number, h: number) => string) {
  const t = topic.toLowerCase();
  const svcMap: Record<BusinessType, { title: string; description: string }[]> = {
    ecommerce: [
      { title: "Curated Collections", description: `Hand-selected ${t} collections updated every season with the latest trends and timeless classics.` },
      { title: "Personal Styling", description: `Our ${t} experts help you find the perfect items that match your style and preferences.` },
      { title: "Gift Registry", description: `Create a ${t} wishlist for any occasion. Share with friends and family for perfect gifts.` },
    ],
    restaurant: [
      { title: "Dine-In Experience", description: `Enjoy our ${t} creations in a beautifully designed atmosphere with impeccable service.` },
      { title: "Delivery & Takeout", description: `Get your favorite ${t} dishes delivered hot and fresh, or pick up at your convenience.` },
      { title: "Event Catering", description: `Professional ${t} catering for weddings, corporate events, and private celebrations.` },
    ],
    portfolio: [
      { title: "Brand Identity", description: `Complete ${t} brand packages including logo, guidelines, and visual identity systems.` },
      { title: "Project Work", description: `End-to-end ${t} project execution from concept to final delivery.` },
      { title: "Consulting", description: `Strategic ${t} consulting to elevate your brand and reach your target audience.` },
    ],
    saas: [
      { title: "Starter Plan", description: `Essential ${t} tools for small teams getting started. Everything you need to begin.` },
      { title: "Business Suite", description: `Advanced ${t} features with team collaboration, analytics, and priority support.` },
      { title: "Enterprise", description: `Custom ${t} solutions with dedicated infrastructure, SLA, and white-label options.` },
    ],
    service: [
      { title: `${topic} Consulting`, description: `Expert guidance to help you navigate the ${t} landscape with confidence.` },
      { title: `${topic} Design`, description: `Beautiful, functional designs that capture the essence of your ${t} vision.` },
      { title: `${topic} Development`, description: `End-to-end solutions that transform your ${t} concepts into reality.` },
    ],
    blog: [
      { title: "Featured Articles", description: `In-depth ${t} articles from expert writers and guest contributors.` },
      { title: "Newsletter Curation", description: `Weekly curated ${t} digest delivered to your inbox.` },
      { title: "Podcast Series", description: `Listen to our ${t} podcast featuring interviews with industry leaders.` },
    ],
    education: [
      { title: "Online Courses", description: `Self-paced ${t} courses with video lessons, quizzes, and projects.` },
      { title: "Live Workshops", description: `Interactive ${t} workshops with real-time instructor feedback.` },
      { title: "Mentorship", description: `1-on-1 ${t} mentorship from experienced professionals.` },
    ],
    fitness: [
      { title: "Personal Training", description: `Custom ${t} programs with dedicated trainer support and accountability.` },
      { title: "Group Classes", description: `High-energy group ${t} sessions led by certified instructors.` },
      { title: "Online Programs", description: `Follow ${t} programs from anywhere with our digital platform.` },
    ],
    agency: [
      { title: "Brand Strategy", description: `Comprehensive ${t} brand strategy that positions you for growth.` },
      { title: "Creative Production", description: `End-to-end ${t} creative from concept to final delivery.` },
      { title: "Performance Marketing", description: `Data-driven ${t} campaigns that deliver measurable ROI.` },
    ],
    nonprofit: [
      { title: "Community Outreach", description: `Grassroots ${t} programs that empower local communities.` },
      { title: "Advocacy & Policy", description: `Championing ${t} causes through research, education, and policy.` },
      { title: "Donor Programs", description: `Multiple ways to support our ${t} mission — every gift makes an impact.` },
    ],
  };
  return svcMap[businessType].map(s => ({ ...s, image: nextImg(600, 400) }));
}

/* ── Extract clean topic from prompt ── */
function extractTopic(prompt: string): string {
  const fillerWords = [
    "selling", "website", "online", "shop", "store", "the", "and", "for", "with",
    "create", "make", "build", "generate", "design", "page", "site", "web",
    "landing", "ecommerce", "e-commerce", "business", "company", "brand",
    "premium", "luxury", "modern", "elegant", "professional", "stunning",
    "beautiful", "amazing", "cool", "nice", "good", "best", "great",
    "based", "themed", "style", "styled", "inspired", "looking", "like",
    "please", "want", "need", "would", "could", "should", "can", "will",
    "about", "that", "this", "from", "have", "has", "had", "been", "being",
    "some", "any", "all", "its", "it's", "very", "really", "just",
  ];
  const words = prompt.trim().split(/\s+/).filter(w => 
    w.length > 2 && !fillerWords.includes(w.toLowerCase())
  );
  if (words.length === 0) return capitalize(prompt.trim());
  return capitalize(words.join(" "));
}

export function generateWebsiteContent(prompt: string, overrideBusinessType?: BusinessType): WebsiteContent {
  const rawPrompt = prompt.trim();
  const topic = extractTopic(rawPrompt);
  // Use Date.now() more aggressively for true randomness between generates
  const seed = rawPrompt.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + Date.now();
  const rand = seededRandom(seed);
  setImgSeed(seed);

  const businessType = overrideBusinessType || detectBusinessType(rawPrompt);

  let imgIdx = 0;
  const nextImg = (w: number, h: number) => getImg(rawPrompt, imgIdx++, w, h);

  const scheme = pick(colorSchemes, rand);
  const layoutVariant = Math.floor(rand() * 12);
  const introVariant = Math.floor(rand() * 8);
  const heroOverlayStyle = Math.floor(rand() * 6);
  // More hero layouts for variety (0-10)
  const heroLayout = businessType === "ecommerce"
    ? [0, 1, 2, 3, 6, 7, 8, 9, 10][Math.floor(rand() * 9)]
    : Math.floor(rand() * 11);
  const fontPairIndex = Math.floor(rand() * fontPairs.length);
  const siteName = generateSiteName(topic, rand, businessType);

  // ── Country/Culture Detection ──
  const promptLower = rawPrompt.toLowerCase();
  const countryMap: Record<string, { kw: string[]; first: string[]; last: string[] }> = {
    india: { kw: ["india","indian","mumbai","delhi","bangalore","chennai","kolkata","hyderabad","pune","jaipur","saree","kurta","lehenga","anarkali","desi","bollywood","hindi"], first: ["Priya","Arjun","Ananya","Rohan","Kavya","Vikram","Meera","Aditya"], last: ["Sharma","Patel","Gupta","Reddy","Nair","Kapoor","Verma","Mehta"] },
    japan: { kw: ["japan","japanese","tokyo","osaka","kyoto","sushi","anime","ramen"], first: ["Yuki","Haruto","Sakura","Ren","Aoi","Takeshi","Hana","Kenji"], last: ["Tanaka","Suzuki","Watanabe","Sato","Nakamura","Yamamoto","Kobayashi","Ito"] },
    korea: { kw: ["korea","korean","seoul","busan","k-pop","kpop","kimchi"], first: ["Ji-woo","Min-jun","Seo-yeon","Hyun","Yuna","Tae-hyung","Ha-na","Joon"], last: ["Kim","Lee","Park","Choi","Jung","Kang","Yoon","Shin"] },
    china: { kw: ["china","chinese","beijing","shanghai","shenzhen","guangzhou"], first: ["Wei","Jing","Ming","Li","Xia","Chen","Yue","Hao"], last: ["Wang","Zhang","Liu","Chen","Yang","Huang","Wu","Zhou"] },
    mexico: { kw: ["mexico","mexican","guadalajara","monterrey","cancun"], first: ["María","Carlos","Sofía","Diego","Valentina","Alejandro","Camila","Santiago"], last: ["García","Hernández","López","Martínez","González","Rodríguez","Sánchez","Ramírez"] },
    brazil: { kw: ["brazil","brazilian","são paulo","rio","samba"], first: ["Ana","Lucas","Isabela","Rafael","Beatriz","Matheus","Larissa","Gabriel"], last: ["Silva","Santos","Oliveira","Souza","Lima","Pereira","Costa","Ferreira"] },
    france: { kw: ["france","french","paris","lyon","marseille","bordeaux","patisserie"], first: ["Camille","Théo","Léa","Hugo","Chloé","Louis","Manon","Antoine"], last: ["Dubois","Laurent","Moreau","Bernard","Petit","Leroy","Roux","Fournier"] },
    italy: { kw: ["italy","italian","rome","milan","florence","venice","pasta"], first: ["Giulia","Marco","Francesca","Alessandro","Chiara","Lorenzo","Elena","Matteo"], last: ["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Colombo","Ricci"] },
    arab: { kw: ["arab","arabic","dubai","saudi","qatar","uae","emirates","riyadh","doha","oman","bahrain","kuwait","abu dhabi"], first: ["Fatima","Ahmed","Layla","Omar","Amira","Hassan","Noor","Khalid"], last: ["Al-Rashid","Al-Mansour","Al-Farsi","Al-Hashimi","Al-Qasim","Al-Saud","Al-Nasser","Al-Bakri"] },
    nigeria: { kw: ["nigeria","nigerian","lagos","abuja","naija"], first: ["Adaeze","Chukwuemeka","Ngozi","Obinna","Chioma","Emeka","Funke","Tunde"], last: ["Okonkwo","Adeyemi","Nwosu","Ibrahim","Okafor","Balogun","Eze","Abubakar"] },
    germany: { kw: ["germany","german","berlin","munich","hamburg"], first: ["Lena","Felix","Hannah","Maximilian","Sophie","Jonas","Marie","Leon"], last: ["Müller","Schmidt","Schneider","Fischer","Weber","Wagner","Becker","Hoffmann"] },
    turkey: { kw: ["turkey","turkish","istanbul","ankara"], first: ["Elif","Emre","Zeynep","Baris","Ayse","Murat","Defne","Kerem"], last: ["Yilmaz","Kaya","Demir","Celik","Ozturk","Aydin","Arslan","Dogan"] },
    spain: { kw: ["spain","spanish","madrid","barcelona"], first: ["Lucía","Pablo","Carmen","Alejandro","Isabel","Javier","Elena","Miguel"], last: ["García","Martínez","López","Fernández","Hernández","Ruiz","Jiménez","Moreno"] },
    russia: { kw: ["russia","russian","moscow"], first: ["Anastasia","Dmitry","Ekaterina","Ivan","Natasha","Alexei","Olga","Mikhail"], last: ["Ivanov","Petrov","Smirnov","Volkov","Kuznetsov","Popov","Sokolov","Morozov"] },
    thailand: { kw: ["thailand","thai","bangkok","phuket"], first: ["Ploy","Nattapong","Siri","Kittisak","Pim","Thanawat","Nong","Anon"], last: ["Srisai","Wongsawat","Chaiyasit","Phanomwan","Thongkham","Rattanakul","Suthep","Kanchanawat"] },
  };

  let detectedCulture: typeof countryMap[string] | null = null;
  for (const data of Object.values(countryMap)) {
    if (data.kw.some(kw => promptLower.includes(kw))) { detectedCulture = data; break; }
  }

  const firstNames = detectedCulture?.first || ["Alexandra", "Marcus", "Sophia", "David", "Olivia", "James", "Emma", "Liam"];
  const lastNames = detectedCulture?.last || ["Reed", "Chen", "Laurent", "Kim", "Parker", "Rodriguez", "Wilson", "Brooks"];
  const roles = ["Founder & CEO", "Creative Director", "Lead Strategist", "Head of Innovation", "Design Lead", "CTO", "VP Marketing", "Chief Designer"];

  const teamPortraits = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  ];

  const teamMembers = Array.from({ length: 4 }, (_, i) => ({
    name: `${pick(firstNames, rand)} ${pick(lastNames, rand)}`,
    role: roles[i % roles.length],
    image: teamPortraits[i % teamPortraits.length],
  }));

  const testimonialNames = detectedCulture
    ? Array.from({ length: 6 }, (_, i) => `${detectedCulture!.first[i % detectedCulture!.first.length]} ${detectedCulture!.last[i % detectedCulture!.last.length]}`)
    : ["Sarah Mitchell", "James Rodriguez", "Emily Chen", "Michael Brown", "Olivia Wilson", "Robert Taylor"];
  const testimonialRoles: Record<BusinessType, string[]> = {
    ecommerce: ["Loyal Customer", "Repeat Buyer", "VIP Member", "Influencer", "Style Blogger", "Fashion Editor"],
    restaurant: ["Food Critic", "Regular Guest", "Event Planner", "Local Blogger", "Chef's Friend", "Wine Enthusiast"],
    portfolio: ["CEO, TechVentures", "Creative Director", "Startup Founder", "Marketing VP", "Brand Manager", "Art Director"],
    saas: ["CTO, StartupCo", "Product Manager", "Engineering Lead", "VP Operations", "CEO, GrowthLabs", "Director of IT"],
    service: ["CEO, TechVentures", "Creative Director", "Startup Founder", "Marketing VP", "Design Lead", "CTO"],
    blog: ["Avid Reader", "Subscriber", "Content Creator", "Fellow Writer", "Editor", "Journalist"],
    education: ["Graduate", "Student", "Parent", "Career Changer", "HR Director", "Learning Coach"],
    fitness: ["Member", "Athlete", "Wellness Coach", "Marathon Runner", "PT Client", "Yoga Practitioner"],
    agency: ["CEO, BrandX", "CMO, TechStart", "Founder, GrowCo", "VP Marketing", "Director of Digital", "Brand Manager"],
    nonprofit: ["Donor", "Volunteer", "Board Member", "Partner Org", "Community Leader", "Beneficiary"],
  };
  
  const testimonialTexts: Record<BusinessType, string[]> = {
    ecommerce: [
      `The quality of ${topic.toLowerCase()} from ${siteName} is unmatched. Fast shipping and beautiful packaging too!`,
      `I've been a customer for over a year — every order exceeds my expectations. Truly premium ${topic.toLowerCase()}.`,
      `Found exactly what I was looking for. The ${topic.toLowerCase()} collection is curated perfectly.`,
      `${siteName} has become my go-to shop. Great prices, amazing quality, and stellar customer service.`,
      `The attention to detail in every ${topic.toLowerCase()} product is remarkable. Highly recommend!`,
      `Shopping at ${siteName} is a delight. The website is beautiful and the products are even better.`,
    ],
    restaurant: [
      `The ${topic.toLowerCase()} here is absolutely incredible. Best dining experience I've had in years!`,
      `Every dish at ${siteName} is a masterpiece. The ambiance and service are equally impressive.`,
      `We hosted our anniversary dinner here — the food, the atmosphere, everything was perfect.`,
      `The seasonal menu never disappoints. Fresh, creative, and bursting with flavor every visit.`,
      `${siteName} is our family's favorite spot. The kids love it and so do we. Truly for everyone.`,
      `From appetizer to dessert, every course was perfection. Can't wait to come back!`,
    ],
    portfolio: [
      `Working with ${siteName} has been extraordinary. Their attention to detail and passion truly sets them apart.`,
      `They understood our brand perfectly and delivered results beyond imagination.`,
      `The creativity and technical mastery they bring to ${topic.toLowerCase()} is extraordinary.`,
      `A true game-changer. Their innovative approach transformed our entire vision.`,
      `Absolutely phenomenal work. Professional, creative, and always on deadline.`,
      `Their expertise combined with artistic vision makes them the perfect ${topic.toLowerCase()} partner.`,
    ],
    saas: [
      `${siteName} transformed our workflow. We've saved 20+ hours per week since implementing it.`,
      `The best ${topic.toLowerCase()} tool we've ever used. Intuitive UI and powerful features.`,
      `Our team productivity increased by 40% within the first month. Game-changing platform.`,
      `Enterprise-grade features at a fraction of the cost. The ROI speaks for itself.`,
      `Support team is incredible — issues resolved within minutes, not hours.`,
      `We evaluated 15 tools before choosing ${siteName}. It's not even close — this is the best.`,
    ],
    service: [
      `Working with ${siteName} has been extraordinary. Their attention to detail and passion truly sets them apart.`,
      `I've never experienced such dedication to ${topic.toLowerCase()}. The quality is simply unmatched.`,
      `A true game-changer in the ${topic.toLowerCase()} space. Their innovative approach transformed our vision.`,
      `Absolutely phenomenal work. They understood our brand perfectly and delivered beyond imagination.`,
      `The creativity and technical mastery they bring to ${topic.toLowerCase()} is extraordinary. Highly recommended.`,
      `Their expertise combined with artistic vision makes them the perfect ${topic.toLowerCase()} partner.`,
    ],
    blog: [
      `${siteName} has become my daily reading habit. The ${topic.toLowerCase()} content is always insightful.`,
      `Best ${topic.toLowerCase()} blog I've found. Deep, well-researched articles every week.`,
      `The newsletter alone is worth subscribing for. Curated ${topic.toLowerCase()} gems every time.`,
      `I've learned so much from ${siteName}. Their ${topic.toLowerCase()} perspective is refreshingly honest.`,
      `The community around ${siteName} is incredible. Great discussions and diverse viewpoints.`,
      `Quality over quantity — every article from ${siteName} is thoughtful and actionable.`,
    ],
    education: [
      `${siteName} transformed my career. The ${topic.toLowerCase()} courses are practical and in-depth.`,
      `Best investment I've made in my education. The instructors at ${siteName} are world-class.`,
      `I went from beginner to job-ready in 3 months. ${siteName}'s structured approach really works.`,
      `The hands-on projects are what set ${siteName} apart. Real skills, not just theory.`,
      `Flexible learning that fits my schedule. ${siteName} made mastering ${topic.toLowerCase()} achievable.`,
      `The community support and mentorship at ${siteName} exceeded all my expectations.`,
    ],
    fitness: [
      `${siteName} completely changed my fitness journey. The trainers are exceptional and motivating.`,
      `Lost 30 pounds in 4 months with ${siteName}. The programs are challenging but effective.`,
      `Best gym experience I've ever had. Clean facilities, great energy, amazing instructors.`,
      `The nutrition guidance combined with training at ${siteName} gave me incredible results.`,
      `I look forward to every session. ${siteName} makes ${topic.toLowerCase()} fun and rewarding.`,
      `From couch potato to marathon runner — all thanks to ${siteName}'s personalized approach.`,
    ],
    agency: [
      `${siteName} doubled our revenue in 6 months. Their ${topic.toLowerCase()} strategy was brilliant.`,
      `The most collaborative agency we've ever worked with. They feel like an extension of our team.`,
      `ROI exceeded expectations by 3x. ${siteName} truly understands ${topic.toLowerCase()}.`,
      `Their creative work consistently wins awards and drives real business results for us.`,
      `We've worked with many agencies — ${siteName} is in a league of their own.`,
      `Fast, responsive, and creative. ${siteName} is our go-to ${topic.toLowerCase()} partner.`,
    ],
    nonprofit: [
      `${siteName} makes giving easy and transparent. I know exactly where my donation goes.`,
      `Volunteering with ${siteName} has been the most rewarding experience. They truly make a difference.`,
      `The impact reports are detailed and inspiring. ${siteName} walks the talk on ${topic.toLowerCase()}.`,
      `Our company partners with ${siteName} for CSR — they are professional and impactful.`,
      `I've been a monthly donor for 3 years. The stories from the field keep me motivated.`,
      `${siteName} is doing incredible work for ${topic.toLowerCase()}. Proud to support their mission.`,
    ],
  };

  const blogCategories = ["Insights", "Tips", "Trends", "News", "Guide"];
  const blogPosts = Array.from({ length: 3 }, (_, i) => ({
    title: [
      `The Future of ${topic}: Trends to Watch in 2026`,
      `How ${topic} is Transforming the Industry`,
      `10 Essential ${topic} Tips for Beginners`,
    ][i],
    excerpt: [
      `Discover the emerging trends that are reshaping the ${topic.toLowerCase()} landscape and how you can stay ahead.`,
      `Learn how innovative approaches to ${topic.toLowerCase()} are creating unprecedented opportunities for growth.`,
      `Whether you're new to ${topic.toLowerCase()} or looking to refine your skills, these essential tips will help.`,
    ][i],
    image: nextImg(600, 400),
    date: ["Jan 15, 2026", "Feb 8, 2026", "Mar 2, 2026"][i],
    category: pick(blogCategories, rand),
  }));

  const features = generateFeatures(topic, businessType);
  const services = generateServices(topic, businessType, nextImg);
  const navLinks = getNavLinks(businessType);

  // Generate products for ecommerce or menu for restaurant
  const products = businessType === "ecommerce" ? generateEcommerceContent(rawPrompt, rand, nextImg) : undefined;
  const menuItems = businessType === "restaurant" ? generateRestaurantMenu(rawPrompt, rand) : undefined;

  // Contextual about text
  const aboutTexts: Record<BusinessType, string[]> = {
    ecommerce: [
      `Welcome to ${siteName}, your premier online destination for ${topic.toLowerCase()}. We curate only the finest products from trusted artisans and brands worldwide.`,
      `Every item in our collection is hand-selected for quality, craftsmanship, and value. We believe ${topic.toLowerCase()} should be accessible without compromising on excellence.`,
      `With thousands of happy customers and a 4.9-star rating, ${siteName} is the trusted name in ${topic.toLowerCase()}. Free shipping, easy returns, and exceptional service — always.`,
    ],
    restaurant: [
      `Welcome to ${siteName}, where ${topic.toLowerCase()} becomes an unforgettable experience. Our passion for quality ingredients and creative cuisine sets us apart.`,
      `Founded by award-winning chefs, we combine traditional techniques with modern innovation. Every dish is crafted with locally sourced, seasonal ingredients.`,
      `Whether you're celebrating a special occasion or enjoying a casual meal, ${siteName} offers an atmosphere of warmth, elegance, and culinary excellence.`,
    ],
    portfolio: [
      `Welcome to ${siteName}, a creative studio specializing in ${topic.toLowerCase()}. We bring ideas to life through exceptional craft and attention to detail.`,
      `With over a decade of experience and 500+ projects delivered, we've earned the trust of brands, startups, and individuals worldwide.`,
      `Our approach combines artistic vision with strategic thinking to create ${topic.toLowerCase()} that not only looks stunning but delivers real results.`,
    ],
    saas: [
      `${siteName} is the leading ${topic.toLowerCase()} platform trusted by 10,000+ teams worldwide. We're on a mission to make ${topic.toLowerCase()} effortless.`,
      `Built by engineers who experienced the pain firsthand, our platform automates the tedious parts so you can focus on what matters most.`,
      `From startups to Fortune 500 companies, ${siteName} powers the ${topic.toLowerCase()} workflows of the world's most innovative organizations.`,
    ],
    service: [
      `Welcome to ${siteName}, the premier destination for ${topic.toLowerCase()}. We are passionate about delivering exceptional experiences.`,
      `From our humble beginnings, we've grown into a trusted name, serving thousands of satisfied clients worldwide.`,
      `Through continuous innovation and unwavering commitment to quality, we strive to exceed expectations at every turn.`,
    ],
    blog: [
      `${siteName} is more than a blog — it's a ${topic.toLowerCase()} knowledge hub curated by passionate experts.`,
      `We've built a community of 50,000+ readers who rely on ${siteName} for trusted ${topic.toLowerCase()} insights.`,
      `Our editorial team combines deep ${topic.toLowerCase()} expertise with a passion for storytelling.`,
    ],
    education: [
      `${siteName} has empowered 25,000+ students to master ${topic.toLowerCase()} through expert-led courses.`,
      `Our curriculum is designed by industry professionals to ensure you learn practical, job-ready ${topic.toLowerCase()} skills.`,
      `From beginners to advanced learners, ${siteName} provides a clear path to ${topic.toLowerCase()} mastery.`,
    ],
    fitness: [
      `${siteName} is your partner in ${topic.toLowerCase()} transformation. Expert trainers, proven programs, real results.`,
      `Our certified coaches have helped thousands achieve their ${topic.toLowerCase()} goals. You could be next.`,
      `State-of-the-art facilities, cutting-edge programs, and a supportive community — that's ${siteName}.`,
    ],
    agency: [
      `${siteName} is a results-driven ${topic.toLowerCase()} agency with 15+ years of delivering measurable impact.`,
      `We combine strategic thinking with creative excellence to help brands win in ${topic.toLowerCase()}.`,
      `From startups to global brands, our team of 50+ ${topic.toLowerCase()} specialists has seen and done it all.`,
    ],
    nonprofit: [
      `${siteName} is dedicated to creating lasting change through ${topic.toLowerCase()}. We've impacted 1M+ lives.`,
      `100% of donations go directly to our ${topic.toLowerCase()} programs. Transparency is our foundation.`,
      `Join a community of changemakers who believe in the power of ${topic.toLowerCase()} to transform lives.`,
    ],
  };

  // Contextual pricing
  const pricingMap: Record<BusinessType, { name: string; price: string; features: string[]; highlighted: boolean }[]> = {
    ecommerce: [
      { name: "Standard", price: "Free", features: ["Browse All Products", "Standard Shipping", "Email Support", "Order Tracking", "Wishlist"], highlighted: false },
      { name: "Premium", price: "$9.99/mo", features: ["Free Express Shipping", "Early Access to Sales", "Exclusive Collections", "Personal Stylist", "Priority Support", "Birthday Rewards"], highlighted: true },
      { name: "VIP", price: "$24.99/mo", features: ["Same-Day Delivery", "Private Shopping Events", "Custom Orders", "White Glove Service", "Unlimited Returns", "Concierge Support"], highlighted: false },
    ],
    restaurant: [
      { name: "Quick Lunch", price: "$15", features: ["Main Course", "Side Dish", "Soft Drink", "Daily Special Option", "Dine-in Only"], highlighted: false },
      { name: "Dinner Experience", price: "$45", features: ["3-Course Meal", "Wine Pairing", "Chef's Selection", "Artisan Bread", "Dessert", "Coffee or Tea"], highlighted: true },
      { name: "Private Dining", price: "Custom", features: ["Custom Menu", "Private Room", "Dedicated Server", "Wine Sommelier", "Floral Arrangements", "Valet Parking"], highlighted: false },
    ],
    portfolio: [
      { name: "Starter", price: "$500", features: ["1 Project", "3 Revisions", "Digital Delivery", "Basic Support", "7-Day Turnaround"], highlighted: false },
      { name: "Professional", price: "$2,000", features: ["3 Projects", "Unlimited Revisions", "Source Files", "Priority Support", "Brand Guidelines", "3-Day Turnaround"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Unlimited Projects", "Dedicated Designer", "Same-Day Delivery", "On-site Meetings", "Full Rights", "24/7 Support"], highlighted: false },
    ],
    saas: [
      { name: "Free", price: "$0", features: ["Up to 3 Users", "Basic Features", "Community Support", "1GB Storage", "Email Notifications"], highlighted: false },
      { name: "Pro", price: "$29/mo", features: ["Unlimited Users", "Advanced Analytics", "Priority Support", "50GB Storage", "API Access", "Custom Integrations"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Dedicated Instance", "SSO & SAML", "SLA Guarantee", "Unlimited Storage", "Custom Development", "24/7 Phone Support"], highlighted: false },
    ],
    service: [
      { name: "Starter", price: "$29/mo", features: ["Basic Support", "5 Projects", "Community Access", "Email Support", "Monthly Reports"], highlighted: false },
      { name: "Professional", price: "$79/mo", features: ["Priority Support", "Unlimited Projects", "Advanced Analytics", "Custom Branding", "API Access", "Dedicated Manager"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Dedicated Manager", "Custom Solutions", "SLA Guarantee", "White Label", "24/7 Phone Support", "On-site Training"], highlighted: false },
    ],
    blog: [
      { name: "Free Reader", price: "Free", features: ["All Articles", "Basic Search", "RSS Feed", "Social Sharing", "Comment Access"], highlighted: false },
      { name: "Premium", price: "$9/mo", features: ["Ad-Free Reading", "Exclusive Articles", "Newsletter", "Early Access", "Downloadable PDFs", "Private Community"], highlighted: true },
      { name: "Contributor", price: "$29/mo", features: ["Write & Publish", "Analytics Dashboard", "Featured Placement", "Revenue Share", "Priority Review", "Author Badge"], highlighted: false },
    ],
    education: [
      { name: "Explorer", price: "Free", features: ["3 Free Courses", "Community Forum", "Basic Certificates", "Mobile Access", "Self-Paced"], highlighted: false },
      { name: "Pro Learner", price: "$39/mo", features: ["All Courses", "Live Workshops", "Verified Certificates", "Project Reviews", "Priority Support", "Career Resources"], highlighted: true },
      { name: "Teams", price: "Custom", features: ["Team Dashboard", "Custom Curriculum", "Dedicated Manager", "Progress Reports", "API Integration", "Volume Discounts"], highlighted: false },
    ],
    fitness: [
      { name: "Basic", price: "$29/mo", features: ["Gym Access", "Group Classes", "Locker Room", "Basic Programs", "Community App"], highlighted: false },
      { name: "Premium", price: "$59/mo", features: ["Unlimited Classes", "Personal Trainer", "Nutrition Plan", "Progress Tracking", "Sauna & Spa", "Guest Passes"], highlighted: true },
      { name: "Elite", price: "$99/mo", features: ["1-on-1 Coaching", "Custom Programs", "Recovery Suite", "Priority Booking", "Private Sessions", "Competition Prep"], highlighted: false },
    ],
    agency: [
      { name: "Project", price: "$5K+", features: ["Single Campaign", "Strategy Brief", "Creative Execution", "Performance Report", "Email Support", "30-Day Duration"], highlighted: false },
      { name: "Retainer", price: "$10K/mo", features: ["Ongoing Strategy", "Monthly Campaigns", "Dedicated Team", "Weekly Reports", "Priority Support", "Quarterly Reviews"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Full-Service Team", "Custom SLA", "C-Suite Access", "Real-Time Dashboard", "On-site Workshops", "Multi-Channel"], highlighted: false },
    ],
    nonprofit: [
      { name: "Supporter", price: "$10/mo", features: ["Monthly Updates", "Impact Reports", "Tax Receipt", "Donor Badge", "Newsletter"], highlighted: false },
      { name: "Champion", price: "$50/mo", features: ["Named Recognition", "Exclusive Events", "Program Selection", "Quarterly Calls", "Volunteer Priority", "Merch Pack"], highlighted: true },
      { name: "Corporate", price: "Custom", features: ["Brand Partnership", "Employee Programs", "Custom Impact", "Press Coverage", "Board Access", "CSR Reporting"], highlighted: false },
    ],
  };
  const pricing = pricingMap[businessType];

  const whyIcons = ["💎", "🏆", "🤝", "📈"];

  return {
    topic,
    siteName,
    businessType,
    tagline: pick(taglineTemplates[businessType], rand)(topic),
    subtitle: generateSubtitle(topic, siteName, businessType, rand),
    heroQuote: generateHeroQuote(topic, businessType, rand),
    heroImage: nextImg(1920, 1080),
    aboutTitle: `About ${siteName}`,
    aboutText: aboutTexts[businessType],
    aboutImage: nextImg(800, 600),
    features,
    services,
    galleryImages: Array.from({ length: 8 }, (_, i) => {
      const captions = [
        `Premium ${topic} Collection`, `${topic} in Detail`, `Our ${topic} Showcase`,
        `Artisan ${topic}`, `${topic} Excellence`, `Curated ${topic}`,
        `${topic} Craftsmanship`, `The ${topic} Experience`,
      ];
      return {
        src: nextImg(800, 600),
        caption: captions[i % captions.length],
      };
    }),
    stats: [
      { value: `${Math.floor(rand() * 15 + 5)}K+`, label: businessType === "ecommerce" ? "Happy Customers" : businessType === "restaurant" ? "Meals Served" : "Happy Clients" },
      { value: `${Math.floor(rand() * 800 + 200)}+`, label: businessType === "ecommerce" ? "Products" : businessType === "restaurant" ? "Menu Items" : "Projects Done" },
      { value: `${Math.floor(rand() * 80 + 20)}+`, label: businessType === "ecommerce" ? "Brands" : "Countries" },
      { value: `${Math.floor(rand() * 20 + 5)}+`, label: "Years Active" },
    ],
    process: businessType === "ecommerce" ? [
      { step: "01", title: "Browse", description: `Explore our curated ${topic.toLowerCase()} collection with detailed descriptions and photos.` },
      { step: "02", title: "Select", description: "Choose your favorites, pick your options, and add to cart with one click." },
      { step: "03", title: "Checkout", description: "Secure payment with multiple options. Apply discount codes at checkout." },
      { step: "04", title: "Enjoy", description: "Fast shipping with tracking. Beautifully packaged and delivered to your door." },
    ] : businessType === "restaurant" ? [
      { step: "01", title: "Reserve", description: "Book your table online or by phone. Walk-ins welcome when available." },
      { step: "02", title: "Explore Menu", description: "Browse our seasonal menu with chef's recommendations and dietary options." },
      { step: "03", title: "Dine", description: "Enjoy your meal in our carefully designed atmosphere with attentive service." },
      { step: "04", title: "Share", description: "Tell your friends about the experience. Join our loyalty program for rewards." },
    ] : [
      { step: "01", title: "Discovery", description: `Understanding your unique ${topic.toLowerCase()} needs through consultation.` },
      { step: "02", title: "Strategy", description: "Crafting a tailored strategy aligned with your objectives and audience." },
      { step: "03", title: "Execution", description: "Bringing the plan to life with meticulous attention to every detail." },
      { step: "04", title: "Delivery", description: "Final review, quality assurance, and delivery of exceptional results." },
    ],
    team: teamMembers,
    testimonials: testimonialNames.map((name, i) => ({
      name,
      role: testimonialRoles[businessType][i],
      text: testimonialTexts[businessType][i],
      avatar: `https://i.pravatar.cc/100?u=${name.replace(/\s/g, '')}${seed}`,
    })),
    whyUs: [
      { title: "Unmatched Quality", description: `We set the gold standard in ${topic.toLowerCase()} with meticulous attention to detail.`, icon: whyIcons[0] },
      { title: "Award Winning", description: `Recognized by industry leaders for our outstanding ${topic.toLowerCase()} solutions.`, icon: whyIcons[1] },
      { title: "Client Focused", description: "Your success is our priority. We work closely with you at every step.", icon: whyIcons[2] },
      { title: "Proven Results", description: "Data-driven approach that consistently delivers measurable growth and impact.", icon: whyIcons[3] },
    ],
    faq: businessType === "ecommerce" ? [
      { question: "How long does shipping take?", answer: `Standard shipping takes 3-5 business days. Express delivery available for 1-2 day shipping. Free shipping on orders over $50.` },
      { question: "What's your return policy?", answer: `We offer a 30-day hassle-free return policy on all ${topic.toLowerCase()} products. Items must be unused and in original packaging.` },
      { question: "Do you ship internationally?", answer: "Yes! We ship to over 50 countries. International shipping rates are calculated at checkout." },
      { question: "How can I track my order?", answer: "Once shipped, you'll receive a tracking number via email. Track your order in real-time through our website." },
      { question: "Are your products authentic?", answer: `Every ${topic.toLowerCase()} product is 100% authentic and sourced directly from verified suppliers. We guarantee quality.` },
      { question: "Do you offer gift cards?", answer: "Yes! Digital gift cards available from $25 to $500. Delivered instantly via email." },
    ] : businessType === "restaurant" ? [
      { question: "Do you take reservations?", answer: "Yes! Book online or call us. We recommend reservations for dinner and weekends." },
      { question: "Do you accommodate dietary restrictions?", answer: "Absolutely. We offer vegetarian, vegan, gluten-free, and allergen-friendly options. Inform your server." },
      { question: "Do you offer catering?", answer: "Yes, we cater events from 10 to 500 guests. Custom menus available. Contact us for a quote." },
      { question: "What are your hours?", answer: "Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 10am-9pm. Brunch on weekends 10am-2pm." },
      { question: "Is there parking?", answer: "Free parking available behind the building. Valet service on Friday and Saturday evenings." },
      { question: "Can I host a private event?", answer: "Our private dining room seats up to 30 guests. Full buyout available for larger events." },
    ] : [
      { question: `What makes ${siteName} unique?`, answer: "We combine cutting-edge technology with creative expertise and personalized attention." },
      { question: "How long does a typical project take?", answer: "Simple projects take 2-4 weeks, comprehensive solutions may take 2-3 months." },
      { question: "Do you offer ongoing support?", answer: "Yes! We provide comprehensive post-project support including maintenance and optimization." },
      { question: "What is your pricing model?", answer: "Flexible pricing tailored to your needs. Contact us for a free consultation and custom quote." },
      { question: "Can I see previous work?", answer: "Yes! We have an extensive portfolio. We'll share relevant case studies during consultation." },
      { question: "How do I get started?", answer: "Reach out through our contact form. We'll schedule a free discovery session." },
    ],
    pricing,
    newsletter: {
      title: businessType === "ecommerce" ? `Get ${siteName} Exclusive Deals` : `Stay Updated with ${siteName}`,
      description: businessType === "ecommerce"
        ? `Subscribe for early access to sales, new ${topic.toLowerCase()} arrivals, and exclusive member-only discounts. Join 50,000+ subscribers.`
        : `Get the latest insights, tips, and exclusive content about ${topic.toLowerCase()} delivered to your inbox. Join 10,000+ subscribers.`,
    },
    partners: businessType === "ecommerce" 
      ? ["Vogue", "Elle", "Forbes", "GQ", "Harper's Bazaar", "Vanity Fair"]
      : businessType === "restaurant"
      ? ["Michelin", "Zagat", "OpenTable", "Yelp Elite", "James Beard", "Wine Spectator"]
      : ["TechCorp", "Innovate Labs", "Design Co.", "Creative Hub", "Digital Works", "Future Systems"],
    blogPosts,
    heroOverlayStyle,
    heroLayout,
    fontPairIndex,
    ctaTitle: businessType === "ecommerce" 
      ? `Start Shopping ${topic} Today`
      : businessType === "restaurant"
      ? `Reserve Your Table at ${siteName}`
      : `Ready to Transform Your ${topic} Experience?`,
    ctaText: businessType === "ecommerce"
      ? `Join thousands of satisfied customers who trust ${siteName} for premium ${topic.toLowerCase()}. Free shipping on your first order with code WELCOME.`
      : businessType === "restaurant"
      ? `Experience the finest ${topic.toLowerCase()} cuisine at ${siteName}. Book your table online or call us for reservations.`
      : `Join thousands who have already discovered what makes ${siteName} the leading destination for ${topic.toLowerCase()}.`,
    introSubtitle: pick(introSubtitles, rand)(topic),
    introDescription: pick(introDescriptions, rand)(topic),
    introKeywords: [topic.split(" ")[0], "Excellence", "Innovation", "Quality", "Design"].slice(0, 5),
    navLinks,
    colorScheme: scheme,
    uniqueSeed: seed,
    layoutVariant,
    introVariant,
    products,
    menuItems,
    promoBanner: businessType === "ecommerce" ? nextImg(1920, 600) : undefined,
    categoryImages: businessType === "ecommerce" ? [nextImg(800, 600), nextImg(800, 600)] : undefined,
    featuredProducts: businessType === "ecommerce" && products ? [0, 1, 2, 3] : undefined,
  };
}

function capitalize(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

export interface CustomStyles {
  fontDisplay: string;
  fontBody: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  textScale: number;
  borderRadius: number;
  sectionSpacing: number;
  buttonStyle: string;
  navStyle: string;
  letterSpacing: number;
  shadowStyle: string;
  animationEnabled: boolean;
  maxWidth: string;
  heroHeight: string;
  cardStyle: string;
  imageFilter: string;
  headingWeight: string;
  lineHeight: number;
  bgOverlayOpacity: number;
  heroTextAlign?: string;
  // New customization options
  gradientDirection?: string;
  gradientEnabled?: boolean;
  gradientSecondary?: string;
  animationSpeed?: number;
  sectionPadding?: number;
  imageAspectRatio?: string;
  buttonSize?: string;
  dividerStyle?: string;
  headerSize?: string;
  contentWidth?: string;
}

export const fontPairsExport = fontPairs;

export function generateHTMLCode(content: WebsiteContent, styles?: CustomStyles): string {
  const font = styles?.fontDisplay || "'Playfair Display', serif";
  const bodyFont = styles?.fontBody || "'DM Sans', sans-serif";
  const bg = styles?.bgColor || content.colorScheme.bg;
  const textClr = styles?.textColor || "#1a1a2e";
  const accent = styles?.accentColor || content.colorScheme.primary;
  const radius = styles?.borderRadius ?? 16;
  const isEcom = content.businessType === "ecommerce";

  const servicesHTML = content.services.slice(0, 6).map(s =>
    `<div class="service-card" style="border-radius:${radius}px">
        <img src="${s.image}" alt="${s.title}" style="border-radius:${radius}px">
        <h3 style="font-family:${font}">${s.title}</h3>
        <p>${s.description}</p>
      </div>`
  ).join('\n    ');

  const featuresHTML = content.features.slice(0, 6).map(f =>
    `<div class="feature-card" style="border-radius:${radius}px">
        <span class="feature-icon">${f.icon}</span>
        <h3 style="font-family:${font}">${f.title}</h3>
        <p>${f.description}</p>
      </div>`
  ).join('\n    ');

  const galleryHTML = content.galleryImages.slice(0, 6).map(img =>
    `<div class="gallery-item"><img src="${img.src}" alt="${img.caption}" style="border-radius:${radius}px"><span class="gallery-caption">${img.caption}</span></div>`
  ).join('\n    ');

  const testimonialsHTML = content.testimonials.slice(0, 3).map(t =>
    `<div class="testimonial-card" style="border-radius:${radius}px">
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
          <div><strong>${t.name}</strong><br><small>${t.role}</small></div>
        </div>
      </div>`
  ).join('\n    ');

  const productsHTML = isEcom && content.products ? content.products.map((p, idx) =>
    `<div class="product-card" style="border-radius:${radius}px" data-name="${p.name}" data-price="${p.price}" data-img="${p.image}" data-desc="${p.description || ''}">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" style="border-radius:${radius}px ${radius}px 0 0">
          ${p.badge ? `<span class="product-badge" style="background:${accent}">${p.badge}</span>` : ''}
          <button class="wishlist-btn" onclick="toggleWishlist(this)" title="Add to Wishlist">♡</button>
          <div class="quick-view-overlay" onclick="openQuickView(${idx})">
            <span class="quick-view-badge" style="background:${accent}cc">👁 Quick View</span>
          </div>
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="product-footer">
            <span class="product-price" style="color:${accent}">${p.price}</span>
            <button class="btn-add-cart" style="background:${accent};border-radius:${radius}px" onclick="addToCart(this)">+ Add</button>
          </div>
        </div>
      </div>`
  ).join('\n    ') : '';

  const faqHTML = content.faq.slice(0, 5).map((f, i) =>
    `<div class="faq-item" style="border-radius:${radius}px">
        <button class="faq-question" onclick="toggleFaq(${i})" style="font-family:${font}">${f.question}<span class="faq-toggle">+</span></button>
        <div class="faq-answer" id="faq-${i}"><p>${f.answer}</p></div>
      </div>`
  ).join('\n    ');

  const blogHTML = content.blogPosts.slice(0, 6).map(post =>
    `<div class="blog-card" style="border-radius:${radius}px">
        <div class="blog-img-wrap"><img src="${post.image}" alt="${post.title}" style="border-radius:${radius}px ${radius}px 0 0"></div>
        <div class="blog-body">
          <div class="blog-meta"><span class="blog-category" style="color:${accent}">${post.category}</span><span class="blog-date">${post.date}</span></div>
          <h3 style="font-family:${font}">${post.title}</h3>
          <p>${post.excerpt}</p>
          <a href="#" class="blog-read-more" style="color:${accent}">Read More →</a>
        </div>
      </div>`
  ).join('\n    ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.siteName} — ${content.tagline}</title>
  <meta name="description" content="${content.subtitle}">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@400;700&family=Cinzel:wght@400;600;700&family=Lora:wght@400;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body style="font-family:${bodyFont};background:${bg};color:${textClr}">

  <!-- ═══ INTRO ANIMATION ═══ -->
  <div id="intro-screen" class="intro-screen" style="background:${bg}">
    <div class="intro-bg-image">
      <img src="${content.heroImage}" alt="">
    </div>
    <div class="intro-overlay" style="background:linear-gradient(135deg, ${bg}f0 0%, ${bg}e0 50%, ${bg}f5 100%)"></div>
    <div class="intro-glow" style="background:radial-gradient(circle, ${accent}12, transparent 60%)"></div>
    <div class="intro-content">
      <div class="intro-logo" style="background:linear-gradient(135deg, ${accent}, ${content.colorScheme.accent});box-shadow:0 12px 40px ${accent}30">
        ${content.siteName.charAt(0)}
      </div>
      <div class="intro-line" style="background:linear-gradient(90deg, transparent, ${accent}40, ${content.colorScheme.accent}40, transparent)"></div>
      <p class="intro-subtitle" style="color:${accent}">${content.introSubtitle}</p>
      <h1 class="intro-title" style="font-family:${font};color:${content.colorScheme.dark}">${content.siteName}</h1>
      <p class="intro-tagline" style="color:${content.colorScheme.dark}90;font-family:${font}">${content.tagline}</p>
      <p class="intro-desc" style="color:${content.colorScheme.dark}70">${content.introDescription}</p>
      <div class="intro-keywords">
        ${content.introKeywords.map(kw => `<span class="intro-kw" style="border:1px solid ${accent}18;color:${accent};background:${accent}06">${kw}</span>`).join('\n        ')}
      </div>
      <div class="intro-progress">
        <div class="intro-progress-track" style="background:${accent}0a">
          <div class="intro-progress-bar" style="background:linear-gradient(90deg, ${accent}, ${content.colorScheme.accent})"></div>
        </div>
        <p class="intro-progress-text" style="color:${content.colorScheme.dark}35">Crafting your experience...</p>
      </div>
    </div>
  </div>

  <nav id="navbar">
    <div class="nav-container">
      <a href="#home" class="logo" style="font-family:${font};color:${accent}">${content.siteName}</a>
      <div class="nav-links">
        ${content.navLinks.map(l => `<a href="#${l.toLowerCase()}">${l}</a>`).join('\n        ')}
        <a href="#contact">Contact</a>
      </div>
      <div class="nav-actions">
        <button class="nav-icon-btn theme-toggle" onclick="toggleTheme()" title="Toggle Theme">🌙</button>
        ${isEcom ? `<button class="nav-icon-btn" onclick="toggleWishlistPanel()" title="Wishlist">♡ <span id="wishlist-count">0</span></button>
        <button class="nav-icon-btn" onclick="toggleCartPanel()" title="Cart">🛒 <span id="cart-count">0</span></button>` : ''}
      </div>
    </div>
  </nav>

  <div style="height:60px"></div><!-- Spacer for fixed navbar -->
  <section id="home" class="hero">
    <img src="${content.heroImage}" alt="${content.topic}" class="hero-bg">
    <div class="hero-overlay"></div>
    <div class="hero-content animate-on-scroll">
      <span class="hero-badge">✦ Welcome to ${content.siteName}</span>
      <h1 style="font-family:${font}">${content.tagline}</h1>
      <p>${content.subtitle}</p>
      <div class="hero-buttons">
        <a href="#${isEcom ? 'shop' : 'services'}" class="btn-primary" style="background:${accent};border-radius:${radius}px">${isEcom ? "Shop Now" : "Explore Now"}</a>
        <a href="#contact" class="btn-secondary" style="border-radius:${radius}px">Get In Touch</a>
      </div>
    </div>
  </section>

  <section id="stats" class="stats-section">
    ${content.stats.map(s => `<div class="stat-card animate-on-scroll" style="border-radius:${radius}px"><span class="stat-value" style="color:${accent};font-family:${font}">${s.value}</span><span class="stat-label">${s.label}</span></div>`).join('\n    ')}
  </section>

  <section id="about" class="content-section">
    <h2 class="animate-on-scroll" style="font-family:${font}">${content.aboutTitle}</h2>
    <div class="about-grid animate-on-scroll">
      <img src="${content.aboutImage}" alt="About" style="border-radius:${radius}px">
      <div>${content.aboutText.map(p => `<p>${p}</p>`).join('')}</div>
    </div>
  </section>

  <section id="services" class="content-section" style="background:${textClr}05">
    <h2 class="animate-on-scroll" style="font-family:${font}">Our Services</h2>
    <div class="services-grid">${servicesHTML}</div>
  </section>

  <section id="features" class="content-section">
    <h2 class="animate-on-scroll" style="font-family:${font}">Why Choose Us</h2>
    <div class="features-grid">${featuresHTML}</div>
  </section>

  ${isEcom && productsHTML ? `<section id="shop" class="content-section" style="background:${textClr}05">
    <h2 class="animate-on-scroll" style="font-family:${font}">Shop All Products</h2>
    <p class="section-subtitle animate-on-scroll">Explore our full collection of ${content.products?.length || 20}+ premium items</p>
    <div class="products-grid">${productsHTML}</div>
  </section>` : ''}

  <section id="gallery" class="content-section">
    <h2 class="animate-on-scroll" style="font-family:${font}">Gallery</h2>
    <div class="gallery-grid">${galleryHTML}</div>
  </section>

  <section id="reviews" class="content-section" style="background:${textClr}05">
    <h2 class="animate-on-scroll" style="font-family:${font}">What People Say</h2>
    <div class="testimonials-grid">${testimonialsHTML}</div>
  </section>

  <section id="blog" class="content-section">
    <h2 class="animate-on-scroll" style="font-family:${font}">Latest Articles</h2>
    <p class="section-subtitle animate-on-scroll">Insights, tips, and stories from our team</p>
    <div class="blog-grid">${blogHTML}</div>
  </section>

  <section id="faq" class="content-section" style="background:${textClr}05">
    <h2 class="animate-on-scroll" style="font-family:${font}">Frequently Asked Questions</h2>
    <div class="faq-container">${faqHTML}</div>
  </section>

  <section id="cta" class="cta-section animate-on-scroll" style="background:${accent}">
    <h2 style="font-family:${font}">${content.ctaTitle}</h2>
    <p>${content.ctaText}</p>
    <a href="#contact" class="btn-secondary" style="border-radius:${radius}px">Get Started Today</a>
  </section>

  <!-- ═══ CONTACT US SECTION ═══ -->
  <section id="contact" class="content-section contact-section">
    <h2 class="animate-on-scroll" style="font-family:${font}">Contact Us</h2>
    <p class="section-subtitle animate-on-scroll">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    <div class="contact-grid animate-on-scroll">
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <div><strong>Address</strong><p>123 Business Avenue, Suite 100<br>New York, NY 10001</p></div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <div><strong>Email</strong><p>hello@${content.siteName.toLowerCase().replace(/\s+/g, '')}.com</p></div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <div><strong>Phone</strong><p>+1 (555) 123-4567</p></div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">🕐</span>
          <div><strong>Hours</strong><p>Mon - Fri: 9AM - 6PM<br>Sat: 10AM - 4PM</p></div>
        </div>
      </div>
      <form class="contact-form" onsubmit="handleContactSubmit(event)" style="border-radius:${radius}px">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="John" required style="border-radius:${Math.min(radius, 8)}px">
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" required style="border-radius:${Math.min(radius, 8)}px">
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" required style="border-radius:${Math.min(radius, 8)}px">
        </div>
        <div class="form-group">
          <label>Subject</label>
          <input type="text" placeholder="How can we help?" style="border-radius:${Math.min(radius, 8)}px">
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Tell us more about your inquiry..." required style="border-radius:${Math.min(radius, 8)}px"></textarea>
        </div>
        <button type="submit" class="btn-primary contact-submit" style="background:${accent};border-radius:${radius}px;width:100%;padding:1rem">Send Message</button>
      </form>
    </div>
  </section>

  <footer style="background:${content.colorScheme.dark}">
    <div class="footer-content">
      <div class="footer-brand">
        <h3 style="font-family:${font};color:#fff">${content.siteName}</h3>
        <p style="color:rgba(255,255,255,0.5)">${content.tagline}</p>
      </div>
      <div class="footer-links">
        ${content.navLinks.map(l => `<a href="#${l.toLowerCase()}" style="color:rgba(255,255,255,0.6)">${l}</a>`).join('\n        ')}
        <a href="#contact" style="color:rgba(255,255,255,0.6)">Contact</a>
      </div>
      <p style="color:rgba(255,255,255,0.3);margin-top:2rem;font-size:0.8rem">© 2026 ${content.siteName}. All rights reserved.</p>
    </div>
  </footer>

  ${isEcom ? `<!-- Cart Sidebar -->
  <div id="cart-overlay" class="panel-overlay" onclick="toggleCartPanel()"></div>
  <div id="cart-panel" class="side-panel">
    <div class="panel-header">
      <h3 style="font-family:${font}">🛒 Your Cart</h3>
      <button onclick="toggleCartPanel()" class="panel-close">✕</button>
    </div>
    <div id="cart-items" class="panel-body"></div>
    <div class="panel-footer">
      <div class="cart-total"><strong>Total:</strong> <span id="cart-total">$0.00</span></div>
      <button class="btn-primary" style="background:${accent};border-radius:${radius}px;width:100%;padding:1rem" onclick="alert('Checkout coming soon!')">Checkout</button>
    </div>
  </div>

  <!-- Wishlist Sidebar -->
  <div id="wishlist-overlay" class="panel-overlay" onclick="toggleWishlistPanel()"></div>
  <div id="wishlist-panel" class="side-panel">
    <div class="panel-header">
      <h3 style="font-family:${font}">♡ Wishlist</h3>
      <button onclick="toggleWishlistPanel()" class="panel-close">✕</button>
    </div>
    <div id="wishlist-items" class="panel-body"></div>
  </div>

  <!-- Quick View Modal -->
  <div id="quickview-overlay" class="panel-overlay" onclick="closeQuickView()"></div>
  <div id="quickview-modal" class="quickview-modal" style="border-radius:${radius}px">
    <button onclick="closeQuickView()" class="panel-close qv-close">✕</button>
    <div class="qv-content">
      <div class="qv-image"><img id="qv-img" src="" alt=""></div>
      <div class="qv-details">
        <p class="qv-brand" style="color:${accent}">${content.siteName}</p>
        <h2 id="qv-name" style="font-family:${font}"></h2>
        <div class="qv-stars" style="color:${accent}">★★★★★ <small style="color:${textClr}88">(128 reviews)</small></div>
        <p id="qv-price" class="qv-price" style="color:${accent};font-family:${font}"></p>
        <p id="qv-desc" class="qv-desc"></p>
        <div class="qv-actions">
          <button id="qv-cart-btn" class="btn-primary" style="background:${accent};border-radius:${radius}px;flex:1;padding:0.875rem" onclick="addToCartFromQV()">🛒 Add to Cart</button>
          <button id="qv-wish-btn" class="btn-wishlist-qv" style="border-radius:${radius}px;border:2px solid ${accent}30;color:${accent}" onclick="toggleWishlistFromQV()">♡</button>
        </div>
        <div class="qv-tags">
          <span class="qv-tag" style="color:${accent};border-color:${accent}20;background:${accent}10">✓ In Stock</span>
          <span class="qv-tag" style="color:${accent};border-color:${accent}20;background:${accent}10">✓ Free Shipping</span>
          <span class="qv-tag" style="color:${accent};border-color:${accent}20;background:${accent}10">✓ 30-Day Returns</span>
        </div>
      </div>
    </div>
  </div>` : ''}

  <script src="script.js"></script>
</body>
</html>`;
}

export function generateCSSCode(content: WebsiteContent, styles?: CustomStyles): string {
  const accent = styles?.accentColor || content.colorScheme.primary;
  const textClr = styles?.textColor || "#1a1a2e";
  const radius = styles?.borderRadius ?? 16;
  const bgColor = styles?.bgColor || content.colorScheme.bg;

  return `/* ${content.siteName} - Generated Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { line-height: 1.7; font-size: ${styles?.textScale ?? 1}rem; letter-spacing: ${styles?.letterSpacing ?? 0}px; }

/* ═══ ANIMATIONS & TRANSITIONS ═══ */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes progressBar { from { width: 0%; } to { width: 100%; } }
@keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
.stagger-1 { transition-delay: 0.1s; } .stagger-2 { transition-delay: 0.2s; } .stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; } .stagger-5 { transition-delay: 0.5s; } .stagger-6 { transition-delay: 0.6s; }

/* ═══ INTRO SCREEN ═══ */
.intro-screen { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; overflow: hidden; transition: opacity 0.8s ease, transform 0.8s ease; }
.intro-screen.hiding { opacity: 0; transform: scale(1.05); pointer-events: none; }
.intro-screen.hidden { display: none; }
.intro-bg-image { position: absolute; inset: 0; }
.intro-bg-image img { width: 100%; height: 100%; object-fit: cover; animation: scaleIn 3.5s ease-out forwards; opacity: 0.12; }
.intro-overlay { position: absolute; inset: 0; }
.intro-glow { position: absolute; width: 500px; height: 500px; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%; animation: pulse 3s ease-in-out; }
.intro-content { position: relative; z-index: 10; text-align: center; max-width: 600px; padding: 2rem; }
.intro-logo { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.25rem; font-weight: 900; margin: 0 auto 1.5rem; animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
.intro-line { height: 1px; width: 80px; margin: 0 auto 1.5rem; animation: scaleIn 0.8s ease 0.3s both; }
.intro-subtitle { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; animation: fadeInUp 0.6s ease 0.5s both; }
.intro-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700; line-height: 1.04; margin-bottom: 1rem; animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }
.intro-tagline { font-size: clamp(1rem, 2.5vw, 1.25rem); font-weight: 500; max-width: 480px; margin: 0 auto 0.75rem; line-height: 1.5; animation: fadeInUp 0.6s ease 1s both; }
.intro-desc { font-size: 0.875rem; line-height: 1.6; max-width: 400px; margin: 0 auto 1.5rem; animation: fadeInUp 0.5s ease 1.2s both; }
.intro-keywords { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 2rem; }
.intro-kw { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.375rem 1rem; border-radius: 999px; backdrop-filter: blur(4px); animation: scaleIn 0.4s ease both; }
.intro-kw:nth-child(1) { animation-delay: 1.5s; } .intro-kw:nth-child(2) { animation-delay: 1.6s; }
.intro-kw:nth-child(3) { animation-delay: 1.7s; } .intro-kw:nth-child(4) { animation-delay: 1.8s; }
.intro-kw:nth-child(5) { animation-delay: 1.9s; }
.intro-progress { max-width: 280px; margin: 0 auto; animation: fadeIn 0.5s ease 1.3s both; }
.intro-progress-track { height: 2px; border-radius: 999px; overflow: hidden; }
.intro-progress-bar { height: 100%; border-radius: 999px; animation: progressBar 2.2s ease-in-out 1.4s both; }
.intro-progress-text { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; margin-top: 0.75rem; animation: pulse 2s ease-in-out infinite; }

#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  background: ${bgColor}dd;
  border-bottom: 1px solid ${textClr}08; padding: 1rem 0;
  animation: fadeInDown 0.6s ease both;
}
.nav-container { max-width: ${styles?.maxWidth || "1200px"}; margin: 0 auto; padding: 0 1.5rem; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.25rem; font-weight: 700; text-decoration: none; transition: opacity 0.3s; }
.logo:hover { opacity: 0.8; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { text-decoration: none; font-size: 0.875rem; color: ${textClr}88; transition: color 0.3s, transform 0.3s; }
.nav-links a:hover { color: ${accent}; transform: translateY(-1px); }

.hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 8s ease-out; }
.hero:hover .hero-bg { transform: scale(1.03); }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)); }
.hero-content { position: relative; z-index: 2; padding: 4rem 2rem; max-width: 800px; }
.hero-badge { display: inline-block; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.75rem; color: rgba(255,255,255,0.9); letter-spacing: 0.1em; margin-bottom: 1.5rem; animation: fadeInUp 0.8s ease 0.2s both; }
.hero-content h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); color: #fff; margin-bottom: 1rem; line-height: 1.05; animation: fadeInUp 1s ease 0.4s both; }
.hero-content p { font-size: 1.125rem; color: rgba(255,255,255,0.75); margin-bottom: 2rem; max-width: 600px; animation: fadeInUp 0.8s ease 0.6s both; }
.hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; animation: fadeInUp 0.8s ease 0.8s both; }
.btn-primary { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 2rem; font-weight: 600; color: #fff; text-decoration: none; transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s; cursor: pointer; border: none; font-size: 0.875rem; }
.btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
.btn-secondary { padding: 0.875rem 2rem; border: 1px solid rgba(255,255,255,0.3); color: #fff; text-decoration: none; transition: all 0.3s; }
.btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

.section-subtitle { text-align: center; color: ${textClr}66; font-size: 1rem; margin-top: -1.5rem; margin-bottom: 2.5rem; }

.stats-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; max-width: ${styles?.maxWidth || "1200px"}; margin: 0 auto; padding: 4rem 1.5rem; }
.stat-card { text-align: center; padding: 2rem 1rem; transition: transform 0.4s ease; }
.stat-card:hover { transform: translateY(-4px); }
.stat-value { font-size: 2.5rem; font-weight: 700; display: block; }
.stat-label { font-size: 0.875rem; color: ${textClr}60; margin-top: 0.25rem; display: block; }

.content-section { max-width: ${styles?.maxWidth || "1200px"}; margin: 0 auto; padding: 5rem 1.5rem; }
.content-section h2 { font-size: clamp(2rem, 4vw, 3rem); text-align: center; margin-bottom: 3rem; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
.about-grid img { width: 100%; object-fit: cover; aspect-ratio: 4/3; transition: transform 0.6s ease; }
.about-grid img:hover { transform: scale(1.02); }
.about-grid p { margin-bottom: 1rem; color: ${textClr}88; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.service-card { background: white; padding: 0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
.service-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
.service-card img { width: 100%; height: 200px; object-fit: cover; transition: transform 0.6s ease; }
.service-card:hover img { transform: scale(1.05); }
.service-card h3 { padding: 1.25rem 1.25rem 0.5rem; font-size: 1.125rem; }
.service-card p { padding: 0 1.25rem 1.25rem; font-size: 0.875rem; color: ${textClr}77; }

.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
.feature-card { text-align: center; padding: 2rem; border: 1px solid ${textClr}10; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s; }
.feature-card:hover { transform: translateY(-6px); box-shadow: 0 12px 35px rgba(0,0,0,0.08); border-color: ${accent}30; }
.feature-icon { font-size: 2rem; display: block; margin-bottom: 1rem; transition: transform 0.3s ease; }
.feature-card:hover .feature-icon { transform: scale(1.2); }
.feature-card h3 { margin-bottom: 0.5rem; }
.feature-card p { font-size: 0.875rem; color: ${textClr}77; }

.products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem; }
.product-card { background: white; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; position: relative; }
.product-card:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(0,0,0,0.12); }
.product-img-wrap { position: relative; overflow: hidden; }
.product-img-wrap img { width: 100%; height: 280px; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.product-card:hover .product-img-wrap img { transform: scale(1.08); }
.product-badge { position: absolute; top: 12px; left: 12px; padding: 4px 12px; font-size: 0.6875rem; font-weight: 700; color: #fff; border-radius: 999px; letter-spacing: 0.05em; text-transform: uppercase; z-index: 2; }
.wishlist-btn { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 50%; border: none; background: rgba(255,255,255,0.9); cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); z-index: 2; }
.wishlist-btn.active { background: ${accent}; color: #fff; }
.wishlist-btn:hover { transform: scale(1.2); }
.quick-view-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.4s ease; }
.product-card:hover .quick-view-overlay { background: rgba(0,0,0,0.2); }
.quick-view-badge { opacity: 0; padding: 0.5rem 1.25rem; border-radius: 999px; color: #fff; font-size: 0.75rem; font-weight: 700; backdrop-filter: blur(8px); transition: opacity 0.4s ease, transform 0.4s ease; transform: translateY(10px); }
.product-card:hover .quick-view-badge { opacity: 1; transform: translateY(0); }
.product-footer { display: flex; align-items: center; justify-content: space-between; }
.product-price { font-size: 1.25rem; font-weight: 700; }
.btn-add-cart { border: none; color: #fff; padding: 0.5rem 1rem; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: opacity 0.3s, transform 0.3s; }
.btn-add-cart:hover { opacity: 0.85; transform: scale(1.05); }
.product-info { padding: 1.25rem; }
.product-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
.product-info p { font-size: 0.8125rem; color: ${textClr}66; margin-bottom: 0.75rem; }

.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
.gallery-item { position: relative; overflow: hidden; cursor: pointer; transition: transform 0.4s ease; }
.gallery-item:hover { transform: scale(1.03); }
.gallery-item img { width: 100%; height: 250px; object-fit: cover; transition: transform 0.6s ease; }
.gallery-item:hover img { transform: scale(1.05); }
.gallery-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); color: #fff; padding: 2rem 1rem 1rem; font-size: 0.85rem; transform: translateY(100%); transition: transform 0.4s ease; }
.gallery-item:hover .gallery-caption { transform: translateY(0); }

.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.testimonial-card { background: white; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.4s ease, box-shadow 0.4s ease; }
.testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
.testimonial-text { font-style: italic; margin-bottom: 1.5rem; color: ${textClr}88; line-height: 1.8; }
.testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
.testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }

.faq-container { max-width: 700px; margin: 0 auto; }
.faq-item { margin-bottom: 1rem; border: 1px solid ${textClr}10; overflow: hidden; transition: box-shadow 0.3s ease; }
.faq-item:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.faq-question { width: 100%; text-align: left; padding: 1.25rem; background: none; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: ${textClr}; transition: color 0.3s; }
.faq-question:hover { color: ${accent}; }
.faq-toggle { font-size: 1.25rem; transition: transform 0.3s; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.faq-answer p { padding: 0 1.25rem 1.25rem; color: ${textClr}77; font-size: 0.9rem; line-height: 1.7; }

.cta-section { text-align: center; padding: 5rem 2rem; color: #fff; }
.cta-section h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.cta-section p { max-width: 600px; margin: 0 auto 2rem; opacity: 0.85; }

/* ═══ CONTACT SECTION ═══ */
.contact-section { padding-bottom: 5rem; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem; align-items: start; }
.contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-item { display: flex; gap: 1rem; align-items: flex-start; padding: 1rem; border-radius: ${radius}px; transition: background 0.3s, transform 0.3s; }
.contact-item:hover { background: ${textClr}05; transform: translateX(4px); }
.contact-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.contact-item strong { display: block; margin-bottom: 0.25rem; font-size: 0.9rem; }
.contact-item p { font-size: 0.85rem; color: ${textClr}66; margin: 0; line-height: 1.5; }
.contact-form { background: white; padding: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid ${textClr}08; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { margin-bottom: 1.25rem; }
.form-group label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.5rem; color: ${textClr}88; text-transform: uppercase; letter-spacing: 0.05em; }
.form-group input, .form-group textarea { width: 100%; padding: 0.875rem 1rem; border: 1.5px solid ${textClr}15; font-family: inherit; font-size: 0.9rem; transition: border-color 0.3s, box-shadow 0.3s; outline: none; background: ${textClr}02; }
.form-group input:focus, .form-group textarea:focus { border-color: ${accent}; box-shadow: 0 0 0 3px ${accent}15; }
.form-group textarea { resize: vertical; min-height: 120px; }
.contact-submit { font-size: 0.95rem; letter-spacing: 0.03em; transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s; }
.contact-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }

/* ═══ FOOTER ═══ */
footer { padding: 3rem 1.5rem; }
.footer-content { max-width: ${styles?.maxWidth || "1200px"}; margin: 0 auto; text-align: center; }
.footer-brand h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.footer-brand p { font-size: 0.875rem; margin-bottom: 1.5rem; }
.footer-links { display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; }
.footer-links a { text-decoration: none; font-size: 0.85rem; transition: color 0.3s, transform 0.3s; display: inline-block; }
.footer-links a:hover { color: #fff !important; transform: translateY(-2px); }

/* Nav actions */
.nav-actions { display: flex; gap: 0.75rem; align-items: center; }
.nav-icon-btn { background: none; border: 1px solid ${textClr}15; padding: 0.5rem 0.75rem; border-radius: 999px; cursor: pointer; font-size: 0.8rem; color: ${textClr}; transition: all 0.3s; }
.nav-icon-btn:hover { border-color: ${accent}; color: ${accent}; transform: scale(1.05); }
.nav-icon-btn span { font-weight: 700; font-size: 0.7rem; }

/* Side panels (cart & wishlist) */
.panel-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); backdrop-filter: blur(4px); z-index: 200; opacity: 0; pointer-events: none; transition: opacity 0.35s ease; }
.panel-overlay.open { opacity: 1; pointer-events: all; }
.side-panel { position: fixed; right: -420px; top: 0; height: 100%; width: 400px; max-width: 100vw; background: #fff; z-index: 201; box-shadow: -10px 0 40px rgba(0,0,0,0.15); display: flex; flex-direction: column; transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.side-panel.open { right: 0; }
.panel-header { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid ${textClr}10; }
.panel-header h3 { margin: 0; font-size: 1.1rem; }
.panel-close { background: none; border: none; font-size: 1.25rem; cursor: pointer; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; color: ${textClr}; }
.panel-close:hover { background: ${textClr}08; transform: rotate(90deg); }
.panel-body { flex: 1; overflow-y: auto; padding: 1rem 1.5rem; }
.panel-footer { padding: 1.25rem 1.5rem; border-top: 1px solid ${textClr}10; }
.cart-total { display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1.1rem; }
.cart-item, .wishlist-item { display: flex; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid ${textClr}08; align-items: center; animation: fadeInUp 0.3s ease both; }
.cart-item img, .wishlist-item img { width: 60px; height: 60px; object-fit: cover; border-radius: 8px; }
.cart-item-info, .wishlist-item-info { flex: 1; }
.cart-item-info h4, .wishlist-item-info h4 { font-size: 0.875rem; margin: 0 0 0.25rem; }
.cart-item-info p, .wishlist-item-info p { font-size: 0.8rem; color: ${textClr}66; margin: 0; }
.remove-btn { background: none; border: none; color: ${textClr}40; cursor: pointer; font-size: 1rem; padding: 0.25rem; transition: color 0.3s, transform 0.3s; }
.remove-btn:hover { color: #e53e3e; transform: scale(1.2); }
.empty-panel { text-align: center; padding: 3rem 1rem; color: ${textClr}40; }

/* Quick View Modal */
.quickview-modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); opacity: 0; pointer-events: none; z-index: 202; background: #fff; max-width: 900px; width: 90vw; max-height: 90vh; overflow-y: auto; box-shadow: 0 30px 80px rgba(0,0,0,0.25); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.quickview-modal.open { transform: translate(-50%, -50%) scale(1); opacity: 1; pointer-events: all; }
.qv-close { position: absolute; top: 1rem; right: 1rem; z-index: 10; }
.qv-content { display: flex; flex-direction: column; }
@media (min-width: 768px) { .qv-content { flex-direction: row; } }
.qv-image { flex: 3; overflow: hidden; }
.qv-image img { width: 100%; height: 100%; min-height: 300px; object-fit: cover; transition: transform 0.6s ease; }
.qv-image:hover img { transform: scale(1.05); }
.qv-details { flex: 2; padding: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.qv-brand { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
.qv-details h2 { font-size: 1.5rem; margin: 0; }
.qv-stars { font-size: 0.875rem; }
.qv-price { font-size: 1.75rem; font-weight: 700; margin: 0; }
.qv-desc { font-size: 0.875rem; color: ${textClr}77; line-height: 1.7; }
.qv-actions { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.btn-wishlist-qv { background: none; padding: 0.875rem 1rem; font-size: 1.1rem; cursor: pointer; transition: all 0.3s; }
.btn-wishlist-qv:hover { transform: scale(1.1); }
.qv-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.qv-tag { font-size: 0.6rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.3rem 0.75rem; border-radius: 999px; border: 1px solid; }

/* ═══ BLOG SECTION ═══ */
.blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.blog-card { background: white; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
.blog-card:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(0,0,0,0.12); }
.blog-img-wrap { overflow: hidden; }
.blog-img-wrap img { width: 100%; height: 200px; object-fit: cover; transition: transform 0.6s ease; }
.blog-card:hover .blog-img-wrap img { transform: scale(1.05); }
.blog-body { padding: 1.5rem; }
.blog-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; font-size: 0.75rem; }
.blog-category { font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
.blog-date { color: ${textClr}55; }
.blog-body h3 { font-size: 1.1rem; margin-bottom: 0.5rem; line-height: 1.4; }
.blog-body p { font-size: 0.85rem; color: ${textClr}66; margin-bottom: 1rem; line-height: 1.6; }
.blog-read-more { font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: opacity 0.3s; }
.blog-read-more:hover { opacity: 0.7; }

@media (max-width: 768px) {
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero-content { padding: 2rem 1.5rem; }
  .services-grid, .features-grid, .testimonials-grid, .blog-grid { grid-template-columns: 1fr; }
  .side-panel { width: 100vw; }
  .form-row { grid-template-columns: 1fr; }
}

/* ═══ DARK MODE ═══ */
body.dark-mode { background: #0f0f17 !important; color: #e8e4df !important; }
body.dark-mode #navbar { background: rgba(15,15,23,0.95) !important; border-color: rgba(255,255,255,0.06) !important; }
body.dark-mode .nav-links a { color: rgba(232,228,223,0.5) !important; }
body.dark-mode .nav-links a:hover { color: ${accent} !important; }
body.dark-mode .service-card, body.dark-mode .feature-card, body.dark-mode .product-card,
body.dark-mode .testimonial-card, body.dark-mode .faq-item, body.dark-mode .contact-form {
  background: #1a1a26 !important; border-color: rgba(255,255,255,0.06) !important; color: #e8e4df !important;
}
body.dark-mode .product-info h3, body.dark-mode .service-card h3, body.dark-mode .feature-card h3,
body.dark-mode .faq-question, body.dark-mode .contact-item strong { color: #e8e4df !important; }
body.dark-mode .product-info p, body.dark-mode .service-card p, body.dark-mode .feature-card p,
body.dark-mode .testimonial-text, body.dark-mode .faq-answer p, body.dark-mode .qv-desc,
body.dark-mode .contact-item p, body.dark-mode .section-subtitle { color: rgba(232,228,223,0.5) !important; }
body.dark-mode .content-section h2 { color: #e8e4df !important; }
body.dark-mode .about-grid p { color: rgba(232,228,223,0.55) !important; }
body.dark-mode .stat-label { color: rgba(232,228,223,0.4) !important; }
body.dark-mode .hero-content p { color: rgba(255,255,255,0.7) !important; }
body.dark-mode .form-group input, body.dark-mode .form-group textarea {
  background: #1e1e2e !important; border-color: rgba(255,255,255,0.1) !important; color: #e8e4df !important;
}
body.dark-mode .form-group label { color: rgba(232,228,223,0.5) !important; }
body.dark-mode .blog-card { background: #1a1a26 !important; border-color: rgba(255,255,255,0.06) !important; }
body.dark-mode .blog-body h3 { color: #e8e4df !important; }
body.dark-mode .blog-body p, body.dark-mode .blog-date { color: rgba(232,228,223,0.5) !important; }
body.dark-mode .quickview-modal, body.dark-mode .side-panel { background: #1a1a26 !important; color: #e8e4df !important; }
body.dark-mode .qv-details h2, body.dark-mode .panel-header h3 { color: #e8e4df !important; }
body.dark-mode .cart-item, body.dark-mode .wishlist-item { border-color: rgba(255,255,255,0.06) !important; }
body.dark-mode .cart-item-info h4, body.dark-mode .wishlist-item-info h4 { color: #e8e4df !important; }
body.dark-mode .cart-item-info p, body.dark-mode .wishlist-item-info p { color: rgba(232,228,223,0.5) !important; }
body.dark-mode .panel-close { color: #e8e4df !important; }
body.dark-mode footer { background: #080810 !important; }
body.dark-mode .nav-icon-btn { color: #e8e4df !important; border-color: rgba(255,255,255,0.1) !important; }
body.dark-mode .gallery-caption { color: #fff !important; }
body.dark-mode .contact-item:hover { background: rgba(255,255,255,0.04) !important; }`;
}

export function generateJSCode(): string {
  return `// ═══ Intro Screen ═══
(function() {
  const intro = document.getElementById('intro-screen');
  if (intro) {
    setTimeout(function() {
      intro.classList.add('hiding');
      setTimeout(function() {
        intro.classList.add('hidden');
      }, 800);
    }, 3800);
  }
})();

// ═══ Theme Toggle (Dark/Light) ═══
let isDarkMode = false;
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
// Restore saved theme
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = '☀️';
  }
})();

// ═══ Smooth scroll ═══
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ═══ Scroll animations (IntersectionObserver) ═══
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));

// Stagger animation for grid children
const staggerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.children;
      Array.from(children).forEach((child, i) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 0.08) + 's, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 0.08) + 's';
        setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 50);
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.services-grid, .features-grid, .products-grid, .gallery-grid, .testimonials-grid, .stats-section, .blog-grid').forEach(el => {
  staggerObserver.observe(el);
});

// ═══ Navbar scroll effect ═══
let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (navbar) {
    navbar.style.background = current > 100 ? 'rgba(255,255,255,0.95)' : 'transparent';
    navbar.style.boxShadow = current > 100 ? '0 2px 20px rgba(0,0,0,0.06)' : 'none';
  }
  lastScroll = current;
}, { passive: true });

// ═══ FAQ toggle ═══
function toggleFaq(index) {
  const answer = document.getElementById('faq-' + index);
  const toggle = answer.previousElementSibling.querySelector('.faq-toggle');
  if (answer.classList.contains('open')) {
    answer.classList.remove('open');
    answer.style.maxHeight = '0';
    toggle.style.transform = 'rotate(0deg)';
  } else {
    answer.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    toggle.style.transform = 'rotate(45deg)';
  }
}

// ═══ Contact Form ═══
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.contact-submit');
  const originalText = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.opacity = '1';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// ═══ Cart System ═══
let cart = [];
let wishlist = [];
const productCards = document.querySelectorAll('.product-card');

function updateCounts() {
  const cc = document.getElementById('cart-count');
  const wc = document.getElementById('wishlist-count');
  if (cc) cc.textContent = cart.reduce((s, i) => s + i.qty, 0);
  if (wc) wc.textContent = wishlist.length;
}

function parsePrice(str) {
  return parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-panel"><p>Your cart is empty</p></div>';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }
  container.innerHTML = cart.map((item, i) =>
    '<div class="cart-item">' +
      '<img src="' + item.img + '" alt="' + item.name + '">' +
      '<div class="cart-item-info"><h4>' + item.name + '</h4><p>' + item.price + ' × ' + item.qty + '</p></div>' +
      '<button class="remove-btn" onclick="removeFromCart(' + i + ')">✕</button>' +
    '</div>'
  ).join('');
  const total = cart.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function addToCart(btn) {
  const card = btn.closest('.product-card');
  const name = card.dataset.name;
  const price = card.dataset.price;
  const img = card.dataset.img;
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; } else { cart.push({ name, price, img, qty: 1 }); }
  btn.textContent = '✓ Added!';
  setTimeout(() => { btn.textContent = '+ Add'; }, 1200);
  updateCounts();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCounts();
  renderCart();
}

function toggleCartPanel() {
  document.getElementById('cart-panel').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
  renderCart();
}

// ═══ Wishlist System ═══
function renderWishlist() {
  const container = document.getElementById('wishlist-items');
  if (!container) return;
  if (wishlist.length === 0) {
    container.innerHTML = '<div class="empty-panel"><p>Your wishlist is empty</p></div>';
    return;
  }
  container.innerHTML = wishlist.map((item, i) =>
    '<div class="wishlist-item">' +
      '<img src="' + item.img + '" alt="' + item.name + '">' +
      '<div class="wishlist-item-info"><h4>' + item.name + '</h4><p>' + item.price + '</p></div>' +
      '<button class="remove-btn" onclick="removeFromWishlist(' + i + ')">✕</button>' +
    '</div>'
  ).join('');
}

function toggleWishlist(btn) {
  const card = btn.closest('.product-card');
  const name = card.dataset.name;
  const idx = wishlist.findIndex(i => i.name === name);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.textContent = '♡';
    btn.classList.remove('active');
  } else {
    wishlist.push({ name: card.dataset.name, price: card.dataset.price, img: card.dataset.img });
    btn.textContent = '♥';
    btn.classList.add('active');
  }
  updateCounts();
  renderWishlist();
}

function removeFromWishlist(index) {
  const name = wishlist[index].name;
  wishlist.splice(index, 1);
  productCards.forEach(card => {
    if (card.dataset.name === name) {
      const btn = card.querySelector('.wishlist-btn');
      if (btn) { btn.textContent = '♡'; btn.classList.remove('active'); }
    }
  });
  updateCounts();
  renderWishlist();
}

function toggleWishlistPanel() {
  document.getElementById('wishlist-panel').classList.toggle('open');
  document.getElementById('wishlist-overlay').classList.toggle('open');
  renderWishlist();
}

// ═══ Quick View ═══
let currentQVIndex = -1;
function openQuickView(index) {
  currentQVIndex = index;
  const card = productCards[index];
  if (!card) return;
  document.getElementById('qv-img').src = card.dataset.img;
  document.getElementById('qv-name').textContent = card.dataset.name;
  document.getElementById('qv-price').textContent = card.dataset.price;
  document.getElementById('qv-desc').textContent = card.dataset.desc || 'Premium quality piece. Handcrafted with attention to detail.';
  document.getElementById('quickview-modal').classList.add('open');
  document.getElementById('quickview-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  const isWished = wishlist.some(i => i.name === card.dataset.name);
  document.getElementById('qv-wish-btn').textContent = isWished ? '♥' : '♡';
}

function closeQuickView() {
  document.getElementById('quickview-modal').classList.remove('open');
  document.getElementById('quickview-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCartFromQV() {
  const card = productCards[currentQVIndex];
  if (!card) return;
  const name = card.dataset.name;
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; } else { cart.push({ name, price: card.dataset.price, img: card.dataset.img, qty: 1 }); }
  updateCounts();
  renderCart();
  const btn = document.getElementById('qv-cart-btn');
  btn.textContent = '✓ Added to Cart!';
  setTimeout(() => { btn.textContent = '🛒 Add to Cart'; }, 1500);
}

function toggleWishlistFromQV() {
  const card = productCards[currentQVIndex];
  if (!card) return;
  const name = card.dataset.name;
  const idx = wishlist.findIndex(i => i.name === name);
  const btn = document.getElementById('qv-wish-btn');
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.textContent = '♡';
  } else {
    wishlist.push({ name, price: card.dataset.price, img: card.dataset.img });
    btn.textContent = '♥';
  }
  const cardBtn = card.querySelector('.wishlist-btn');
  if (cardBtn) {
    cardBtn.textContent = idx > -1 ? '♡' : '♥';
    cardBtn.classList.toggle('active');
  }
  updateCounts();
}

// Close panels with Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeQuickView();
    document.querySelectorAll('.side-panel.open').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.panel-overlay.open').forEach(p => p.classList.remove('open'));
    document.body.style.overflow = '';
  }
});`;
}
