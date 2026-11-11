import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    // 1: Parent ครอบทั้งหน้า
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      {/* 2: รูปโปรไฟล์ (ไฟล์ในเครื่อง ใช้ require) */}
      <Image
        source={require('@/assets/profile-me.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />

      {/* 3: ชื่อ + คำคม */}
      <Text style={styles.name}>ชวิศ หมั่นวงส์</Text>
      <Text style={styles.quote}>ความรักก็เหมือนfaceที่กลับด้าน มีอยู่แต่มองไม่เห็น</Text>

      {/* 4: กล่องข้อมูล */}
      <View style={styles.card}>
        <Text style={styles.info}>ห้อง BIT.1/5   เลขที่ 5</Text>
        <Text style={styles.info}>Email: yokicgontop@gmail.com</Text>
        <Text style={styles.info}>Phone: 09x-xxx-xxxx</Text>
      </View>

      {/* 5: ภาพกิจกรรม 3 รูป (รูปจากลิงก์ ต้องใส่ width/height) */}
      <Text style={styles.heading}>ภาพกิจกรรม</Text>
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' }}
          style={styles.thumb}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' }}
          style={styles.thumb}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' }}
          style={styles.thumb}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 72,
    paddingBottom: 32,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // ครึ่งหนึ่งของขนาด = วงกลม
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 14 },
  quote: { fontSize: 12, color: '#999', marginTop: 4, textAlign: 'center' },
  card: {
    alignSelf: 'stretch',
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    padding: 16,
    gap: 6,
    marginTop: 20,
  },
  info: { fontSize: 12, color: '#333' },
  heading: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 18,
    marginBottom: 8,
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumb: { width: 100, height: 100, borderRadius: 12 },
});
