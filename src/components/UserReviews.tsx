
import React from 'react';

const reviews = [
  {
    name: "Sophie & Marc",
    rating: 5,
    date: "15.05.25",
    comment: "Cette app a sauvé notre couple ! Les jeux sont vraiment fun et nous ont permis de redécouvrir notre complicité. Les défis hot sont parfaits pour pimenter nos soirées 🔥",
    helpful: 247
  },
  {
    name: "Emma",
    rating: 5,
    date: "14.05.25", 
    comment: "Absolument génial ! Mon copain et moi adorons les jeux de cette app. C'est excitant, amusant et ça nous rapproche énormément. Je recommande à 1000% !",
    helpful: 189
  },
  {
    name: "Julie & Alex",
    rating: 4,
    date: "13.05.25",
    comment: "Super application avec plein de jeux différents. Parfait pour briser la routine. Le bonus eBook est un plus appréciable. Quelques jeux pourraient être encore plus osés 😉",
    helpful: 156
  },
  {
    name: "Camille",
    rating: 5,
    date: "12.05.25",
    comment: "Interface très jolie et facile à utiliser. Les jeux sont variés et vraiment bien pensés pour les couples. Ça a redonné du piment à notre relation !",
    helpful: 203
  },
  {
    name: "Thomas & Lisa",
    rating: 5,
    date: "11.05.25",
    comment: "On a acheté l'app par curiosité et on ne regrette pas ! Les jeux nous font rire et nous excitent. C'est notre nouvelle routine du soir 💕",
    helpful: 167
  }
];

const UserReviews = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">Avis des utilisateurs</h2>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold">4.8</span>
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-6 h-6 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-600">8,245 avis</p>
        </div>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className={`w-4 h-4 ${i <= review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-3">{review.comment}</p>
              
              <div className="text-sm text-gray-500">
                <span className="font-medium">{review.helpful}</span> personnes ont trouvé cet avis utile
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
