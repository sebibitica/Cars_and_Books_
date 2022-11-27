import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Card_carte({ navigation, numeCarte, numeAutor, linkpozaCarte, undeNavighez, icon1name, icon2name }) {
    return (
        <View style={styles.box}>
            <View style={{ alignItems: 'flex-start' }}>
                <Ionicons name={icon1name} size={25} color="red" />
            </View>
            <TouchableOpacity style={styles.card_carte} onPress={() => navigation.navigate(undeNavighez)}>
                <Image style={{ width: 90, height: 130, borderRadius: 10 }} source={{ uri: linkpozaCarte }} />
                <View style={styles.date_autor_carte}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }} > {numeCarte}</Text>
                    <Text style={{ fontSize: 30, fontWeight: '300' }}>{numeAutor}</Text>
                </View>
            </TouchableOpacity >
            <View style={{ alignItems: 'flex-end' }}>
                <Ionicons name={icon2name} size={25} color="green" />
            </View>
        </View >
    );
}


export function BooksScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Card_carte
                navigation={navigation}
                numeCarte="Ion"
                numeAutor="Liviu Rebreanu"
                linkpozaCarte="https://www.libris.ro/img/pozeprod/59/1012/66/878091.jpg"
                undeNavighez="book1"
                icon1name="pulse"
                icon2name="cloud"
            />
            <Card_carte
                navigation={navigation}
                numeCarte="Enigma Otiliei"
                numeAutor="George Calinescu"
                linkpozaCarte="http://www.librariabucuresti.com/pics/produs/mare/Enigma-otiliei-George-Calinescu.jpg"
                undeNavighez="book2"
                icon1name="leaf"
                icon2name="skull"
            />
        </View>
    );
}

export function Book({ navigation, numeCarte, rezumatCarte, linkpoza }) {
    return (
        <View style={styles.container_pagina_carti}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{numeCarte}</Text>
            </View>
            <Text style={{ fontSize: 18 }}>{rezumatCarte}</Text>
            <View style={styles.imagine}>
                <Image style={{ width: '95%', height: '95%' }} source={{ uri: linkpoza }} />
            </View>
        </View>
    );
}

export function Book1({ navigation }) {
    return (
        <Book
            navigation={navigation}
            numeCarte="Ion"
            rezumatCarte="Ion este primul roman obiectiv din literatura română, fiind apărut în anul 1920, după o lungă perioadă de elaborare, așa cum însuși autorul menționează în finalul operei, între martie 1913 - iulie 1920. Apariția romanului a stârnit un adevărat entuziasm în epocă, mai ales că nimic din creația nuvelistică de până atunci nu anunța această evoluție spectaculoasă: „Nimic din ce e publicat înainte nu ne putea face să prevedem admirabila dezvoltare a unui scriitor, care a început și a continuat vreo zece ani, nu numai fără strălucire, dar și fără indicații de viitor”, nota Eugen Lovinescu."
            linkpoza="https://www.adevaruldespredaci.ro/wp-content/uploads/2021/03/despre-romanul-ion-de-liviu-rebreanu-750x500.jpg"
        />
    );
}

export function Book2({ navigation }) {
    return (
        <Book
            navigation={navigation}
            numeCarte="Enigma Otiliei"
            rezumatCarte="Enigma Otiliei este un roman citadin, al Bucurestiului de pana la Primul Razboi Mondial.După temele folosite, romanul este balzacian și citadin, aspect al modernismului lovinescian. O frescă a burgheziei bucureștene de la începutul secolului al XX-lea (1909-1911), opera prezintă aspectele ei caracteristice din perspectiva social economică (moștenirea averii lui Costache Giurgiuveanu). Pe acest fundal se profilează și maturizarea lui Felix care-i oferă caracterul de bildungsroman.."
            linkpoza="https://10lascoala.com/wp-content/uploads/2021/07/enigma-otiliei.-4.jpg"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    container_pagina_carti: {
        flex: 1,
        backgroundColor: '#fff'
    },
    box: {
        width: '90%',
        height: '30%',
        justifyContent: 'space-between'
    },
    card_carte: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 10,
    },
    date_autor_carte: {
        width: '60%',
        height: '90%',
        justifyContent: 'center'
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagine: {
        flex: 1,
        alignItems: 'center'
    }
});