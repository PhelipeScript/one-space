import { StyleSheet, Text, View } from 'react-native'

export function Test() {
  return (
    <View style={styles.container}>
      <Text>Test works</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
