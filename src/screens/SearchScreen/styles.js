import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        backgroundColor: '#fff',
        marginVertical: 4,
        paddingVertical: 10,
        marginHorizontal: 6,
        borderRadius: 10,
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#828FBB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    title: {
        marginLeft: 20,
        fontSize: 20,
        lineHeight: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    main: {
        marginTop: 14,
    },

    tinyLogo: {
        width: 80,
        height: 100,
        background: 'red',
        zIndex: 99999,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 14,
    },

    boxInfo: { flex: 1, paddingRight: 8 },
    nameBook: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#444',
    },

    nameAuthor: { flexShrink: 1, flexWrap: 'wrap', marginVertical: 4, fontSize: 14.5 },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 30,
    },
});
export default styles;
