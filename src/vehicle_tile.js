import React from "react";
import { Text, ScrollView, Image, StyleSheet, View, Animated, Dimensions, TouchableWithoutFeedback } from "react-native";

const screen = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "rgb(245, 245, 245)",
    padding: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  blue: {
    backgroundColor: 'blue'
  },
  red: {
    backgroundColor: 'red'
  },
  leftContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  rightContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end"
  },
  image: {
    position: "absolute",
    margin: 20,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  yearMake: {
    fontFamily: "HelveticaNeue-Light",
    fontSize: 12,
    marginBottom: 4,
    color: "rgb(150, 150, 150)"
  },
  model: {
    fontFamily: "HelveticaNeue-Light",
    marginBottom: 8,
    fontSize: 15
  },
  freeDeliveryContainer: {
    borderRadius: 5,
    backgroundColor: "rgb(230, 230, 230)",
    padding: 5
  }, 
  freeDelivery: {
    color: "rgb(255, 90, 0)",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  price: {
    color: "rgb(255, 90, 0)",
    fontSize: 24,
    fontWeight: "300"
  },
  mileageView:{
    flexGrow: 2,
    justifyContent: "flex-end"
  },
  mileage:{
    fontFamily: "HelveticaNeue-Light",
    color: "rgb(100, 100, 100)",
    fontSize: 13,
    fontWeight: "400"
  }
});

class VehicleTile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
               source={{uri: this.props.vehicle.chrome_image_url}}/>
        <View style={styles.leftContent}>
          <Text style={styles.yearMake}>
            {this.props.vehicle.model_year} {this.props.vehicle.make}
          </Text>
          <Text style={styles.model}>{this.props.vehicle.model}</Text>
          { this.props.vehicle.delivery_option == "delivery"
            ? <View style={styles.freeDeliveryContainer}>
                <Text style={styles.freeDelivery}>Free Delivery</Text>
              </View>
            : null}
        </View>

        <View style={styles.rightContent}>
          <Text style={styles.price}>
            ${this.props.vehicle.product_financials[0].monthly_payment_cents}
          </Text>
          <Text style={styles.yearMake}>Per Mo.</Text>
          <View style={styles.mileageView}>
            <Text style={styles.mileage}>
              Mileage {this.props.vehicle.mileage}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}


var sampleVehicle =     {
  "body_style": "4dr CVT LX", 
  "categories": [
    "fuel_efficient", 
    "daily"
  ], 
  "chrome_image_url": "http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2015/9933/9933_cc0640_001_BK.png", 
  "cpo_flag": false, 
  "deal_financials_group_id": 16066710, 
  "dealer_id": 9873, 
  "dealer_location_coord": "25.9794417,-80.2059214", 
  "delivery_option": "pickup", 
  "estimated_days_until_delivery": [], 
  "exterior_color_info": {
    "fair_colored_image": "http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2015/9933/9933_cc0640_001_BK.png", 
    "has_color_image": true
  }, 
  "fair_reserved": false, 
  "id": "19XFB2F59FE0677332015", 
  "image_location_list": [
    "http://cdn-prod.prod.fair.engineering/vehicle-images/0640_032_png/MY2015/9933/9933_cc0640_032_BK.png", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-1.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-2.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-3.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-4.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-5.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-6.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-7.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-8.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-9.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-10.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-11.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-12.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-13.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-14.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-15.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-16.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-17.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-18.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-19.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-20.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-21.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-22.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-23.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-24.jpg", 
    "http://vehicle-photos-published.vauto.com/1d/48/ce/e0-e9ad-43da-958d-1d6196e6e4a7/image-25.jpg"
  ], 
  "is_fair_priced": true, 
  "is_on_hold": false, 
  "is_user_qualified": true, 
  "make": "Honda", 
  "mileage": 62685, 
  "model": "Civic Sedan", 
  "model_year": "2015", 
  "new_used_flag": "USED", 
  "product_addon_financials": [
    {
      "display_name": "Wear and Tear Plan", 
      "is_taxable": false, 
      "name": "wear_and_tear", 
      "options": [
        {
          "display_name": "Selected", 
          "key": "selected", 
          "meta_data": {
            "single_event_cap": 100000, 
            "total_event_cap": 500000
          }, 
          "taxes_cents": 0, 
          "value_cents": 1650, 
          "value_with_taxes_cents": 1650
        }
      ], 
      "payment_frequency": "MONTHLY", 
      "type": "excess_wear_and_tear_protection"
    }
  ], 
  "product_financials": [
    {
      "id": 361067253, 
      "monthly_payment_cents": 16500, 
      "payment_frequency": "MONTHLY", 
      "recurring_payment_cents": 16500, 
      "start_fee_cents": 82000, 
      "total_drive_off_cost_cents": 82000
    }
  ], 
  "product_type": "consumer", 
  "simple_exterior_color": "black", 
  "trim": "LX"
};

export {VehicleTile, sampleVehicle};

