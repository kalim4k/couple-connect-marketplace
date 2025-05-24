
import React from 'react';

const reviews = [
  {
    name: "Sophie & Marc",
    initial: "S",
    rating: 5,
    date: "15.05.25",
    comment: "Cette app a sauvé notre couple ! Les jeux sont vraiment fun et nous ont permis de redécouvrir notre complicité. Les défis hot sont parfaits pour pimenter nos soirées 🔥",
    helpful: 247,
    bgColor: "bg-purple-500"
  },
  {
    name: "Emma",
    initial: "E",
    rating: 5,
    date: "14.05.25", 
    comment: "Absolument génial ! Mon copain et moi adorons les jeux de cette app. C'est excitant, amusant et ça nous rapproche énormément. Je recommande à 1000% !",
    helpful: 189,
    bgColor: "bg-pink-500"
  },
  {
    name: "Julie & Alex",
    initial: "J",
    rating: 4,
    date: "13.05.25",
    comment: "Super application avec plein de jeux différents. Parfait pour briser la routine. Le bonus eBook est un plus appréciable. Quelques jeux pourraient être encore plus osés 😉",
    helpful: 156,
    bgColor: "bg-blue-500"
  },
  {
    name: "Camille",
    initial: "C",
    rating: 5,
    date: "12.05.25",
    comment: "Interface très jolie et facile à utiliser. Les jeux sont variés et vraiment bien pensés pour les couples. Ça a redonné du piment à notre relation !",
    helpful: 203,
    bgColor: "bg-green-500"
  },
  {
    name: "Thomas & Lisa",
    initial: "T",
    rating: 5,
    date: "11.05.25",
    comment: "On a acheté l'app par curiosité et on ne regrette pas ! Les jeux nous font rire et nous excitent. C'est notre nouvelle routine du soir 💕",
    helpful: 167,
    bgColor: "bg-indigo-500"
  }
];

const UserReviews = () => {
  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex items-start gap-3 mb-2">
              <div className={`w-8 h-8 ${review.bgColor} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                {review.initial}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{review.name}</span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className={`w-3 h-3 ${i <= review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                <p className="text-xs text-gray-500">
                  {review.helpful} personnes ont trouvé ce commentaire utile
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full text-sm text-green-600 font-medium py-2 mt-4">
        Afficher tous les avis
      </button>
    </div>
  );
};

export default UserReviews;
