// ดึง Component ที่ใช้จาก react-native
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// หน้าแรกของแอป
export default function Index() {
  return (
    // 1: กล่องหลักครอบทั้งหน้า (เลื่อนได้)
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      {/* 2: รูปโปรไฟล์ (รูปในเครื่อง ใช้ require) */}
      <Image
        source={require('@/assets/profile-me.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />

      {/* 3: ชื่อ และ คำคม */}
      <Text style={styles.name}>ชวิศ หมั่นวงส์</Text>
      <Text style={styles.quote}>ความรักก็เหมือนfaceที่กลับด้าน มีอยู่แต่มองไม่เห็น</Text>

      {/* 4: กล่องข้อมูล ห้อง/เลขที่/อีเมล/เบอร์ */}
      <View style={styles.card}>
        <Text style={styles.info}>ห้อง BIT.1/5   เลขที่ 5</Text>
        <Text style={styles.info}>Email: yokicgontop@gmail.com</Text>
        <Text style={styles.info}>Phone: 09x-xxx-xxxx</Text>
      </View>

      {/* 5: หัวข้อ และ ภาพกิจกรรม 3 รูป (รูปจากลิงก์ ต้องใส่ width/height) */}
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

// รวม style ทั้งหมดไว้ที่นี่
const styles = StyleSheet.create({
  // สีพื้นหลังทั้งหน้า
  page: { flex: 1, backgroundColor: '#0F172A' },
  // จัดของให้อยู่กลาง + ระยะห่างขอบ
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 72,
    paddingBottom: 32,
  },
  // รูปโปรไฟล์วงกลม
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // ครึ่งหนึ่งของขนาด = วงกลม
    borderWidth: 2,
    borderColor: '#38BDF8',
  },
  // ชื่อ
  name: { fontSize: 20, fontWeight: 'bold', color: '#F8FAFC', marginTop: 14 },
  // คำคม
  quote: { fontSize: 12, color: '#94A3B8', marginTop: 4, textAlign: 'center' },
  // กล่องข้อมูล
  card: {
    alignSelf: 'stretch', // ขยายเต็มความกว้าง
    backgroundColor: '#1E293B',
    borderRadius: 14, // มุมโค้ง
    padding: 16, // ระยะห่างด้านใน
    gap: 6, // ระยะห่างระหว่างข้อความ
    marginTop: 20, // ระยะห่างด้านบน
  },
  // ข้อความในกล่อง
  info: { fontSize: 12, color: '#E2E8F0' },
  // หัวข้อ "ภาพกิจกรรม"
  heading: {
    alignSelf: 'flex-start', // ชิดซ้าย
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginTop: 18,
    marginBottom: 8,
  },
  // แถวรูปกิจกรรม เรียงแนวนอน
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between', // กระจายห่างเท่ากัน
  },
  // รูปกิจกรรมแต่ละรูป
  thumb: { width: 100, height: 100, borderRadius: 12 },
});
