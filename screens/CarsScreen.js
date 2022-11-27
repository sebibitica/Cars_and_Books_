import { StyleSheet, Text, View, Image } from 'react-native';

export function Specificatii_fuel({ carfuel }) {
    return (
        <View style={styles.linie_specificatii}>
            <View style={styles.inceput}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: "https://img.icons8.com/color/512/gas-pump.png" }}
                />
            </View>
            <View style={styles.mijloc}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>Fuel</Text>
            </View>
            <View style={styles.final}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{carfuel}</Text>
            </View>
        </View>
    );
}

export function Specificatii_speed({ carspeed }) {
    return (
        <View style={styles.linie_specificatii}>
            <View style={styles.inceput}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: "https://img.icons8.com/ios/512/speedometer.png" }}
                />
            </View>
            <View style={styles.mijloc}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>TopSpeed</Text>
            </View>
            <View style={styles.final}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{carspeed} Km/h</Text>
            </View>
        </View>
    );
}

export function Specificatii_acceleration({ caracceleration }) {
    return (
        <View style={styles.linie_specificatii}>
            <View style={styles.inceput}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-acceleration-engineering-flaticons-lineal-color-flat-icons.png" }}
                />
            </View>
            <View style={styles.mijloc}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>Acceleration</Text>
            </View>
            <View style={styles.final}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{caracceleration} s</Text>
            </View>
        </View>
    );
}

export function Specificatii_gearbox({ cargearbox }) {
    return (
        <View style={styles.linie_specificatii}>
            <View style={styles.inceput}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: "https://img.icons8.com/pastel-glyph/512/gearbox.png" }}
                />
            </View>
            <View style={styles.mijloc}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>GearBox</Text>
            </View>
            <View style={styles.final}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{cargearbox}</Text>
            </View>
        </View>
    );
}

export function Specificatii_weight({ carweight }) {
    return (
        <View style={styles.linie_specificatii}>
            <View style={styles.inceput}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: "https://img.icons8.com/ios/512/car-on-weight.png" }}
                />
            </View>
            <View style={styles.mijloc}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>Weight</Text>
            </View>
            <View style={styles.final}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{carweight} Kg</Text>
            </View>
        </View>
    );
}

export function Cars({ carname, carspeed, caracceleration, carweight, carfuel, cargearbox, carpiclink }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textsus}>{carname}</Text>
            <View style={{ height: 15 }}></View>
            <View style={styles.centrare}>
                <Image style={styles.poza} source={{ uri: carpiclink }} />
            </View>
            <View style={{ height: 15 }}></View>
            <View style={styles.centrare}>
                <View style={styles.specificatii_box}>
                    <Specificatii_fuel carfuel={carfuel} />
                    <Specificatii_speed carspeed={carspeed} />
                    <Specificatii_acceleration caracceleration={caracceleration} />
                    <Specificatii_weight carweight={carweight} />
                    <Specificatii_gearbox cargearbox={cargearbox} />
                </View>
            </View>
        </View>
    );
}

export function Car1() {
    return (
        <Cars
            carname="Logan 1.4"
            carspeed="150"
            caracceleration="8"
            carweight="1000"
            carfuel="Diesel"
            cargearbox="5 Manual"
            carpiclink="https://frankfurt.apollo.olxcdn.com/v1/files/42vd640p7d2t2-RO/image;s=1156x868"
        />
    );
}

export function Car2() {
    return (
        <Cars
            carname="Audi A7 2022 3.0 TFSI"
            carspeed="350"
            caracceleration="3"
            carweight="1250"
            carfuel="Gasoline"
            cargearbox="Automatic"
            carpiclink="https://www.honestjohn.co.uk/media/_v6/13788095/Audi%20A7%20Sportback%20(1).jpg?width=1200&height=800&rmode=crop"
        />
    );
}

export function Car3() {
    return (
        <Cars
            carname="Porche Taycan Turbo S"
            carspeed="400" caracceleration="1.5"
            carweight="1100"
            carfuel="Electric"
            cargearbox="Automatic"
            carpiclink="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x1_5/dam/pnr/2019/products/taycan-world-premiere-18445/gallery-static/b-P19_0627_a3_rgb.jpg/jcr:content/b-P19_0627_a3_rgb.jpg"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textsus: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    centrare: {
        alignItems: 'center',
    },
    poza: {
        width: '95%',
        height: 300,
        borderRadius: 30,
    },
    specificatii_box: {
        width: '95%',
        height: 400,
    },
    linie_specificatii: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inceput: {
        width: '34%',
        alignItems: 'flex-start'
    },
    mijloc: {
        width: '33%',
        alignItems: 'center'
    },
    final: {
        width: '33%',
        alignItems: 'flex-end'
    },
});