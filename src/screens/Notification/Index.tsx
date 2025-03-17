import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView } from 'react-native'
import React from 'react'
import Styles from './Style'
import CustomLabel from '../../components/CustomLabel/Index'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const Notification = () => {
  type RootStackParamList = {
        Bottom: undefined;
        DepositeScreen: undefined;  
        Notification:undefined
    };
    
    type NavigationProp = StackNavigationProp<RootStackParamList, 'Bottom'>;
    const navigation = useNavigation<NavigationProp>();  return (
    <ScrollView style={Styles.MainView}>
        {/* <CustomLabel title='Notifications'
         addLeft={
            <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Image style={Styles.LeftStyle}  source={require('../../images/left.png')}/>
            </TouchableOpacity>
        }/> */}
        <View style={Styles.ImageTextStyle}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image  style={Styles.LeftStyle} source={require('../../images/left.png')}/>

            </TouchableOpacity>
            <Text style={Styles.LabelStyle}>
         Notifications
            </Text>
        </View>
        <View>
            <Text style={Styles.TodayText}>Today</Text>
        </View>
        <TouchableOpacity style={Styles.RectangleView}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/sync.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>App Update</Text>
             <Text style={Styles.Details}>New Update out now! Discover Improved{"\n"}productivity tools and more.</Text>
             <Text style={Styles.DaysText}>  2 days ago</Text>
            </View>
            
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.RectangleView,{marginTop:'4%'}]}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/list2.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>Payment Successful</Text>
             <Text style={Styles.Details}>Your payment of PKR 10,000 to ABC Store has{"\n"}
             been successfully processed</Text>
             <Text style={[Styles.DaysText,{left:'82%'}]}>  2 days ago</Text>
            </View>
            
            </View>
        </TouchableOpacity>
        <View>
            <Text style={Styles.TodayText}>Yesterday</Text>
        </View>
        <TouchableOpacity style={Styles.RectangleView}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/cross.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>Transaction Failed</Text>
             <Text style={Styles.Details}>Your payment of PKR 5,000 to XYZ failed.{"\n"}
             Please try again</Text>
             <Text style={Styles.DaysText}>  2 days ago</Text>
            </View>
            
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.RectangleView,{marginTop:'4%'}]}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/list2.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>Payment Successful</Text>
             <Text style={Styles.Details}>Your payment of PKR 10,000 to ABC Store has{"\n"}
             been successfully processed</Text>
             <Text style={[Styles.DaysText,{left:'82%'}]}>  2 days ago</Text>
            </View>
            
            </View>
        </TouchableOpacity>
        <View>
            <Text style={Styles.TodayText}>Older</Text>
        </View>
        <TouchableOpacity style={Styles.RectangleView}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/sync.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>App Update</Text>
             <Text style={Styles.Details}>New Update out now! Discover Improved{"\n"}productivity tools and more.</Text>
             <Text style={Styles.DaysText}>  2 days ago</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.RectangleView,{marginTop:'4%',marginBottom:'10%'}]}>
            <View style={Styles.ImageView}>
            <Image  style={Styles.SyncImage}source={require('../../images/list2.png')}/>
            <View style={Styles.AlignColumn}>
            <Text style={Styles.AppUpdate}>Payment Successful</Text>
             <Text style={Styles.Details}>Your payment of PKR 10,000 to ABC Store has{"\n"}
             been successfully processed</Text>
             <Text style={[Styles.DaysText,{left:'82%'}]}>  2 days ago</Text>
            </View>
            </View>
        </TouchableOpacity>
        
    </ScrollView>
  )
}

export default Notification

const styles = StyleSheet.create({})