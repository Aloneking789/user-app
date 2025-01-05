import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Fixed Top Banner Section */}
      <View style={styles.banner}>
        <MaterialIcons name="local-offer" size={24} color="white" />
        <Text style={styles.bannerText}>Save 10% on every service at ₹249</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Location Section */}
        <View style={styles.locationSection}>
          <Text style={styles.locationText}>Noida, Uttar Pradesh - India</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for 'AC service'"
          />
        </View>

        {/* Most Booked Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most booked services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: "Haircut for men", rating: "4.88(492K)", price: "$259", image: require('../../../assets/Charity.png') },
              { name: "Sofa cleaning", rating: "4.86(482K)", price: "$549", image: require('../../../assets/Charity.png') },
              { name: "Microwave check-up", rating: "4.86(122K)", price: "$160", image: require('../../../assets/Charity.png') },
            ].map((service, index) => (
              <View key={index} style={styles.bookedService}>
                <Image source={service.image} style={styles.serviceImage} />
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceRating}>{service.rating}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Thoughtful Curations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thoughtful curations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: "BATHROOM CLEANING", image: require('../../../assets/Charity.png') },
              { name: "ALL PANELS", image: require('../../../assets/Charity.png') },
              { name: "NAT WATER PL", image: require('../../../assets/Charity.png') },
            ].map((service, index) => (
              <View key={index} style={styles.curationItem}>
                <Image source={service.image} style={styles.curationImage} />
                <Text style={styles.curationText}>{service.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* New and Noteworthy Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New and noteworthy</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: "Wall Panels", image: require('../../../assets/Charity.png') },
              { name: "Native Water Purifier", image: require('../../../assets/Charity.png') },
              { name: "Native Smart Locks", image: require('../../../assets/Charity.png') },
              { name: "Full Home Painting", image: require('../../../assets/Charity.png') },
            ].map((service, index) => (
              <View key={index} style={styles.noteworthyItem}>
                <Image source={service.image} style={styles.noteworthyImage} />
                <Text style={styles.noteworthyText}>{service.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {[
            { name: "Women's Salon & Spa", icon: "spa" },
            { name: "Men's Salon & Massage", icon: "content-cut" },
            { name: "AC & Appliance Repair", icon: "build" },
            { name: "Cleaning & Pest Control", icon: "cleaning-services" },
            { name: "Electrician, Plumber & Carpenter", icon: "handyman" },
            { name: "Native Water Purifier", icon: "water" },
            { name: "Painting & Waterproofing", icon: "format-paint" },
            { name: "Wall Panels", icon: "view-quilt" },
          ].map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
              <MaterialIcons name={service.icon} size={40} color="purple" />
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* New Launch Section
        <View style={styles.newLaunchBanner}>
          <Text style={styles.newLaunchText}>New Launch: Native Smart Locks</Text>
        </View> */}
      </ScrollView>

      {/* Fixed Bottom Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user-circle" size={24} color="purple" />
          <Text>UC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ios-beauty" size={24} color="purple" />
          <Text>Beauty</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="purple" />
          <Text>Homes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="lock" size={24} color="purple" />
          <Text>Native</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="account-circle" size={24} color="purple" />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 15,
  },
  bannerText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 80, // To ensure content is not hidden behind the fixed bottom navigation
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookedService: {
    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 16,
    marginTop: 10,
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  serviceRating: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  curationItem: {
    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  curationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  curationText: {
    fontSize: 16,
    marginTop: 10,
  },
  noteworthyItem: {
    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  noteworthyImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  noteworthyText: {
    fontSize: 16,
    marginTop: 10,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  serviceItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceText: {
    marginTop: 10,
    textAlign: 'center',
  },
  newLaunchBanner: {
    backgroundColor: 'lightpurple',
    padding: 15,
    alignItems: 'center',
  },
  newLaunchText: {
    fontSize: 16,
    color: 'purple',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
});