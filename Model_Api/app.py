from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle


# Initiallization of app and CORS..........................................................................
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173"]}})




# Model for Crop_Recommendation.............................................................................
model = pickle.load(open('Crop_Recommendation.pkl', 'rb'))

# Model's Labels............................................................................................ 
crop_dicts = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans", 19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}




# Route for Crop Recommendation...........................................................................
@app.route('/crop_recommendation',methods=['POST'])
def crop_recommendation():
    data = request.json
    N=int(data.get('nitrogen'))
    P=int(data.get('phosphorus'))
    K=int(data.get('potassium'))
    humidity=int(data.get('humidity'))
    temperature=int(data.get('temparature'))
    rainfal=int(data.get('rainfall'))
    ph=int(data.get('ph'))
    data = model.predict([[N,P,K,temperature,humidity,ph,rainfal]])
    return jsonify({'prediction': str(crop_dicts[data[0]])}) 




if __name__ == '__main__':
    app.run(debug=True)
