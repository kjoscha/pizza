import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bigNumber: {
    fontSize: 30
  },
  slider: {
    marginTop: 20,
    marginBottom: 20,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
  },
  priceText: {
    marginTop: 30,
  },
  greyBlock: {
    backgroundColor: 'lightgrey',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 4,
  },
  listButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'steelblue',
    borderRadius: 4,
  },
  listButtonText: {
    color: 'white',
    fontSize: 22,
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  container: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
