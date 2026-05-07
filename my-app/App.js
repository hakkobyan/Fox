import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const uploadOptions = [
  {
    key: 'text',
    icon: 'TXT',
    title: 'Text',
    description: 'Paste your content',
    color: '#7C4DFF',
    tint: '#F2EAFF',
    border: '#DCCEFF',
  },
  {
    key: 'pdf',
    icon: 'PDF',
    title: 'PDF',
    description: 'Upload a PDF',
    color: '#FF4D4F',
    tint: '#FFF0F0',
    border: '#FFD3D4',
  },
  {
    key: 'image',
    icon: 'IMG',
    title: 'Image',
    description: 'Upload an image',
    color: '#27AE60',
    tint: '#ECFFF3',
    border: '#CFF2DD',
  },
  {
    key: 'link',
    icon: 'URL',
    title: 'Link',
    description: 'Add a link',
    color: '#2F80ED',
    tint: '#EEF5FF',
    border: '#D6E7FF',
  },
];

const uploadedItems = [
  {
    key: 'future-ai',
    icon: 'PDF',
    title: 'The Future of AI.pdf',
    meta: 'PDF | 1.4 MB',
    color: '#FF4D4F',
    tint: '#FFF0F0',
  },
  {
    key: 'mountain',
    icon: 'IMG',
    title: 'mountain.jpg',
    meta: 'Image | 2.6 MB',
    color: '#2F80ED',
    tint: '#EEF5FF',
  },
  {
    key: 'renewable',
    icon: 'TXT',
    title: 'Renewable energy is essential for our future...',
    meta: 'Text | 320 characters',
    color: '#7C4DFF',
    tint: '#F2EAFF',
  },
];

const steps = [
  {
    key: 'send',
    number: '1',
    icon: 'IN',
    title: 'Send your content',
    description: 'Upload text, PDF, image or link',
  },
  {
    key: 'research',
    number: '2',
    icon: 'AI',
    title: "I'll research it",
    description: "I'll analyze and gather information",
  },
  {
    key: 'chat',
    number: '3',
    icon: 'Q&A',
    title: "Let's chat",
    description: 'Ask questions and get answers',
  },
];

const tabs = [
  { key: 'home', icon: 'HM', label: 'Home', active: true },
  { key: 'history', icon: 'HS', label: 'History', active: false },
  { key: 'profile', icon: 'ME', label: 'Profile', active: false },
];

function UploadCard({ item }) {
  return (
    <Pressable style={[styles.uploadCard, { borderColor: item.border }]}>
      <View style={[styles.uploadCardIconWrap, { backgroundColor: item.tint }]}>
        <Text style={[styles.uploadCardIcon, { color: item.color }]}>{item.icon}</Text>
      </View>
      <Text style={[styles.uploadCardTitle, { color: item.color }]}>{item.title}</Text>
      <Text style={styles.uploadCardDescription}>{item.description}</Text>
    </Pressable>
  );
}

function UploadRow({ item, isLast }) {
  return (
    <View style={[styles.uploadedRow, !isLast && styles.uploadedRowBorder]}>
      <View style={[styles.uploadedIconWrap, { backgroundColor: item.tint }]}>
        <Text style={[styles.uploadedIcon, { color: item.color }]}>{item.icon}</Text>
      </View>

      <View style={styles.uploadedTextWrap}>
        <Text numberOfLines={2} style={styles.uploadedTitle}>
          {item.title}
        </Text>
        <Text style={styles.uploadedMeta}>{item.meta}</Text>
      </View>

      <Pressable style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </Pressable>
    </View>
  );
}

function StepRow({ item }) {
  return (
    <View style={styles.stepRow}>
      <View style={styles.stepIconOuter}>
        <Text style={styles.stepIconText}>{item.icon}</Text>
      </View>

      <View style={styles.stepCopy}>
        <Text style={styles.stepTitle}>
          {item.number}. {item.title}
        </Text>
        <Text style={styles.stepDescription}>{item.description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topBar}>
          <Pressable style={styles.navButton}>
            <Text style={styles.navButtonText}>=</Text>
          </Pressable>

          <Text style={styles.screenTitle}>Home</Text>

          <Pressable style={styles.plusButton}>
            <Text style={styles.plusButtonText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>What would you like{'\n'}to research?</Text>
          <Text style={styles.heroSubtitle}>
            Send any text, PDF, image or link and{'\n'}I'll research it and chat with you.
          </Text>
        </View>

        <View style={styles.uploadGrid}>
          {uploadOptions.map((item) => (
            <UploadCard key={item.key} item={item} />
          ))}
        </View>

        {uploadedItems.length > 0 ? (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Your uploads</Text>

            <View style={styles.uploadedList}>
              {uploadedItems.map((item, index) => (
                <UploadRow
                  key={item.key}
                  item={item}
                  isLast={index === uploadedItems.length - 1}
                />
              ))}
            </View>
          </View>
        ) : null}

        <Pressable style={styles.ctaWrap}>
          <LinearGradient
            colors={['#6A31F4', '#8752FF']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.cta}
          >
            <Text style={styles.ctaSpark}>*</Text>
            <Text style={styles.ctaText}>Start Research</Text>
          </LinearGradient>
        </Pressable>

        <View style={[styles.sectionCard, styles.howItWorksCard]}>
          <View style={styles.howHeader}>
            <Text style={styles.howHeaderSpark}>*</Text>
            <Text style={styles.sectionTitle}>How it works</Text>
          </View>

          <View style={styles.stepsList}>
            {steps.map((item) => (
              <StepRow key={item.key} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <Pressable key={tab.key} style={styles.tabItem}>
            <Text style={[styles.tabIcon, tab.active && styles.tabIconActive]}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, tab.active && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FCFBFF',
  },
  backgroundGlowTop: {
    position: 'absolute',
    top: -110,
    right: -70,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(133, 82, 255, 0.07)',
  },
  backgroundGlowBottom: {
    position: 'absolute',
    left: -80,
    bottom: 180,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: 'rgba(133, 82, 255, 0.05)',
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 148,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 56,
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#21233F',
    fontSize: 24,
    fontWeight: '400',
  },
  screenTitle: {
    color: '#191A30',
    fontSize: 16,
    fontWeight: '700',
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B4DFF',
    shadowColor: '#7B4DFF',
    shadowOpacity: 0.28,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 7,
  },
  plusButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
    marginTop: -2,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 34,
  },
  heroTitle: {
    color: '#16182E',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 38,
    textAlign: 'center',
    marginBottom: 18,
  },
  heroSubtitle: {
    color: '#666D82',
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'center',
  },
  uploadGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 18,
  },
  uploadCard: {
    flex: 1,
    minHeight: 110,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderWidth: 1,
    shadowColor: '#271451',
    shadowOpacity: 0.05,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  uploadCardIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  uploadCardIcon: {
    fontSize: 13,
    fontWeight: '800',
  },
  uploadCardTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 5,
  },
  uploadCardDescription: {
    color: '#72788F',
    fontSize: 11,
    lineHeight: 16,
  },
  sectionCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ECE7F8',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 18,
    shadowColor: '#24124F',
    shadowOpacity: 0.05,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  sectionTitle: {
    color: '#1A1B31',
    fontSize: 16,
    fontWeight: '800',
  },
  uploadedList: {
    marginTop: 14,
  },
  uploadedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  uploadedRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEBF7',
  },
  uploadedIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  uploadedIcon: {
    fontSize: 13,
    fontWeight: '800',
  },
  uploadedTextWrap: {
    flex: 1,
    paddingRight: 10,
  },
  uploadedTitle: {
    color: '#17182E',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 21,
    marginBottom: 4,
  },
  uploadedMeta: {
    color: '#787F95',
    fontSize: 12,
  },
  removeButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#1C1D32',
    fontSize: 16,
    fontWeight: '500',
  },
  ctaWrap: {
    marginBottom: 20,
  },
  cta: {
    minHeight: 68,
    borderRadius: 18,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#6E35F6',
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  ctaSpark: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  howItWorksCard: {
    paddingTop: 20,
    paddingBottom: 14,
  },
  howHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  howHeaderSpark: {
    color: '#6E35F6',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 10,
  },
  stepsList: {
    marginTop: 4,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  stepIconOuter: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F4FF',
    marginRight: 12,
    marginTop: 2,
  },
  stepIconText: {
    color: '#6E35F6',
    fontSize: 12,
    fontWeight: '800',
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    color: '#18192F',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },
  stepDescription: {
    color: '#72788F',
    fontSize: 12,
    lineHeight: 18,
  },
  tabBar: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ECE7F8',
    backgroundColor: 'rgba(255,255,255,0.96)',
    shadowColor: '#24124F',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  tabIcon: {
    color: '#9197AA',
    fontSize: 12,
    fontWeight: '800',
  },
  tabIconActive: {
    color: '#6E35F6',
  },
  tabLabel: {
    color: '#70778D',
    fontSize: 13,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#6E35F6',
    fontWeight: '700',
  },
});
