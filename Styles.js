import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  slider: {
    marginTop: 20,
    marginBottom: 20,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems:'center',
  },
  checkbox: {
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'steelblue',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    justifyContent: 'space-around'
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    marginVertical: 4,
  },
  listItemRow: {
    marginHorizontal: '1%',
    marginVertical: 1,
    width: '98%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 4,
  },
  listItemDescription: {
    padding: 10,
    fontStyle: 'italic',
    color: 'grey',
  },
  listItemName: {
    width: '40%',
    padding: 10,
  },
  listItemNumber: {
    width: '15%',
    paddingVertical: 10,
  },
  listItemSquaremeterPrice: {
    width: '25%',
    padding: 10,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 22,
    borderRadius: 4,
    borderWidth: 0.5,
  }
});
