import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Switch,
  Alert,
} from 'react-native';

// External libraries for form elements
import Checkbox from 'expo-checkbox';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import ColorPicker from 'react-native-wheel-color-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  // Text input
  const [fullName, setFullName] = useState('');

  // Password input
  const [password, setPassword] = useState('');

  // Email input
  const [email, setEmail] = useState('');

  // Number input
  const [age, setAge] = useState('');

  // Telephone input
  const [phone, setPhone] = useState('');

  // URL input
  const [website, setWebsite] = useState('');

  // Search input
  const [searchQuery, setSearchQuery] = useState('');

  // Multiline text input
  const [bio, setBio] = useState('');

  // Checkbox
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  // Radio buttons
  const [userType, setUserType] = useState('Student');
  const userTypeOptions = [
    { id: 'Student', label: 'Student', value: 'Student' },
    { id: 'Employee', label: 'Employee', value: 'Employee' },
    { id: 'Freelancer', label: 'Freelancer', value: 'Freelancer' },
  ];

  // Picker / Select
  const [country, setCountry] = useState('USA');

  // Switch
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Date picker
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Time picker
  const [preferredTime, setPreferredTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Date and time picker
  const [appointment, setAppointment] = useState(new Date());
  const [showAppointmentPicker, setShowAppointmentPicker] = useState(false);

  // Slider / Range
  const [satisfactionLevel, setSatisfactionLevel] = useState(5);

  // Color picker
  const [favoriteColor, setFavoriteColor] = useState('#000000');

  // File picker
  const [selectedDocument, setSelectedDocument] = useState('');

  // Image picker / Camera
  const [selectedImage, setSelectedImage] = useState('');

  // Month picker
  const [selectedMonth, setSelectedMonth] = useState('January');

  // Week picker
  const [selectedWeek, setSelectedWeek] = useState('Week 1');

  // Pick a document
  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedDocument(result.assets[0].name);
      }
    } catch (error) {
      console.log('Error selecting document:', error);
    }
  };

  // Pick an image from gallery
  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  // Take a photo with the camera
  const handleTakePhoto = async () => {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) {
        Alert.alert('Permission Required', 'Camera access permission is required to take a photo.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error taking photo with camera:', error);
    }
  };

  // Submit function
  const handleSubmit = () => {
    // Basic validation for required fields
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in Full Name, Email, and Password.');
      return;
    }

    // Combine all 21 values into one object
    const formData = {
      fullName,
      password,
      email,
      age,
      phone,
      website,
      searchQuery,
      bio,
      subscribeNewsletter,
      userType,
      country,
      notificationsEnabled,
      birthDate: birthDate.toDateString(),
      preferredTime: preferredTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      appointment: appointment.toString(),
      satisfactionLevel,
      favoriteColor,
      selectedDocument: selectedDocument || 'No document selected',
      selectedImage: selectedImage || 'No image selected',
      selectedMonth,
      selectedWeek,
    };

    // Print form data to console
    console.log('Submitted Form Data:', formData);
    Alert.alert('Success', 'Form submitted successfully! Check console for output.');
  };

  return (
    <ScrollView>
      <Text>User Registration Form</Text>

      {/* Text */}
      <Text>Full Name</Text>
      <TextInput
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Password */}
      <Text>Password</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Email */}
      <Text>Email Address</Text>
      <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Number */}
      <Text>Age</Text>
      <TextInput
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Telephone */}
      <Text>Phone Number</Text>
      <TextInput
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* URL */}
      <Text>Website URL</Text>
      <TextInput
        placeholder="https://example.com"
        keyboardType="url"
        autoCapitalize="none"
        value={website}
        onChangeText={setWebsite}
      />

      {/* Search */}
      <Text>Search</Text>
      <TextInput
        placeholder="Search keywords..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Multiline text */}
      <Text>Bio / Additional Information</Text>
      <TextInput
        placeholder="Enter bio or longer notes..."
        multiline={true}
        numberOfLines={4}
        value={bio}
        onChangeText={setBio}
      />

      {/* Checkbox */}
      <Text>Newsletter Subscription</Text>
      <View>
        <Checkbox
          value={subscribeNewsletter}
          onValueChange={setSubscribeNewsletter}
        />
        <Text>{subscribeNewsletter ? 'Subscribed' : 'Not subscribed'}</Text>
      </View>

      {/* Radio button */}
      <Text>User Category</Text>
      <RadioGroup
        radioButtons={userTypeOptions}
        onPress={setUserType}
        selectedId={userType}
      />

      {/* Picker / Select */}
      <Text>Country</Text>
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
      >
        <Picker.Item label="United States" value="USA" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="United Kingdom" value="UK" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Germany" value="Germany" />
      </Picker>

      {/* Switch */}
      <Text>Enable Notifications</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={setNotificationsEnabled}
      />
      <Text>{notificationsEnabled ? 'Notifications ON' : 'Notifications OFF'}</Text>

      {/* Date picker */}
      <Text>Date of Birth</Text>
      <Button
        title={`Select Date: ${birthDate.toDateString()}`}
        onPress={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setBirthDate(date);
          }}
        />
      )}

      {/* Time picker */}
      <Text>Preferred Time</Text>
      <Button
        title={`Select Time: ${preferredTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
        onPress={() => setShowTimePicker(true)}
      />
      {showTimePicker && (
        <DateTimePicker
          value={preferredTime}
          mode="time"
          display="default"
          onChange={(event, time) => {
            setShowTimePicker(false);
            if (time) setPreferredTime(time);
          }}
        />
      )}

      {/* Date and time picker */}
      <Text>Appointment Date and Time</Text>
      <Button
        title={`Select Date & Time: ${appointment.toString()}`}
        onPress={() => setShowAppointmentPicker(true)}
      />
      {showAppointmentPicker && (
        <DateTimePicker
          value={appointment}
          mode="datetime"
          display="default"
          onChange={(event, date) => {
            setShowAppointmentPicker(false);
            if (date) setAppointment(date);
          }}
        />
      )}

      {/* Slider / Range */}
      <Text>Satisfaction Level: {satisfactionLevel} / 10</Text>
      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={satisfactionLevel}
        onValueChange={setSatisfactionLevel}
      />

      {/* Color picker */}
      <Text>Favorite Color: {favoriteColor}</Text>
      <ColorPicker
        color={favoriteColor}
        onColorChangeComplete={(color) => setFavoriteColor(color)}
        thumbSize={25}
        sliderSize={25}
        noSnap={true}
        row={false}
      />

      {/* File picker */}
      <Text>Document Upload</Text>
      <Button
        title="Choose Document"
        onPress={handlePickDocument}
      />
      <Text>{selectedDocument ? selectedDocument : 'No document selected'}</Text>

      {/* Image picker & Camera */}
      <Text>Profile Picture</Text>
      <Button
        title="Choose Image from Gallery"
        onPress={handlePickImage}
      />
      <Button
        title="Take Photo with Camera"
        onPress={handleTakePhoto}
      />
      <Text>{selectedImage ? selectedImage : 'No image selected'}</Text>

      {/* Month picker */}
      <Text>Preferred Month</Text>
      <Picker
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        <Picker.Item label="January" value="January" />
        <Picker.Item label="February" value="February" />
        <Picker.Item label="March" value="March" />
        <Picker.Item label="April" value="April" />
        <Picker.Item label="May" value="May" />
        <Picker.Item label="June" value="June" />
        <Picker.Item label="July" value="July" />
        <Picker.Item label="August" value="August" />
        <Picker.Item label="September" value="September" />
        <Picker.Item label="October" value="October" />
        <Picker.Item label="November" value="November" />
        <Picker.Item label="December" value="December" />
      </Picker>

      {/* Week picker */}
      <Text>Preferred Week</Text>
      <Picker
        selectedValue={selectedWeek}
        onValueChange={(itemValue) => setSelectedWeek(itemValue)}
      >
        <Picker.Item label="Week 1" value="Week 1" />
        <Picker.Item label="Week 2" value="Week 2" />
        <Picker.Item label="Week 3" value="Week 3" />
        <Picker.Item label="Week 4" value="Week 4" />
      </Picker>

      {/* Submit Button */}
      <Button
        title="Submit Form"
        onPress={handleSubmit}
      />
    </ScrollView>
  );
}
