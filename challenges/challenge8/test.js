constructor(props) {
    super(props);
    this.state = {
        region: {
            latitude: 50.60254331180157,
            latitudeDelta: 0.2729186541296684,
            longitude: 16.721875704824924,
            longitudeDelta: 0.26148553937673924,
        }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
}

randomRegion() {
    return {
        ...this.state.region,
        ...this.randomCoordinate(),
    };
}

animateRandom() {
    this.map.animateToRegion(this.randomRegion());
}

onRegionChange(region) {
    this.setState({
        region
    });
}

randomCoordinate() {
    const region = this.state.region;
    console.log(region.latitude + (Math.random() * 10) * (region.latitudeDelta / 2));
    return {
        latitude: region.latitude + (Math.random() * 10) * (region.latitudeDelta / 2),
        longitude: region.longitude + (Math.random() * 10) * (region.longitudeDelta / 2),
    };
}

render() {
    return (
        <View style={styles.container}>
        <MapView
        ref={ref => {
            this.map = ref;
        }}
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChange}
        style={styles.map}
        />
        <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => this.animateRandom()}
        style={[styles.bubble, styles.button]}
        >
        <Text style={styles.buttonText}>Jump</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
}