
import React from 'react';

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Emma & Lucas",
      avatar: "E",
      rating: 5,
      date: "15.05.25",
      comment: "Cette app a vraiment transformé notre relation ! Les jeux sont créatifs et nous avons redécouvert la complicité. Parfait pour briser la routine !",
      helpful: 234,
      color: "bg-pink-500"
    },
    {
      id: 2,
      name: "Sophia",
      avatar: "S",
      rating: 5,
      date: "12.05.25",
      comment: "Mon copain et moi adorons cette application ! Les défis sont variés, certains romantiques, d'autres plus hot. Exactement ce qu'il nous fallait 🔥",
      helpful: 189,
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Marie & Tom",
      avatar: "M",
      rating: 4,
      date: "10.05.25",
      comment: "Super concept ! Nous utilisons l'app régulièrement et elle nous donne plein d'idées pour passer du temps de qualité ensemble. L'eBook bonus est un plus !",
      helpful: 156,
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Avis des utilisateurs</h2>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-medium text-sm`}>
                {review.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 text-sm">{review.name}</span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-3 h-3 ${star <= review.rating ? 'fill-yellow-400' : 'fill-gray-200'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                
                <div className="text-xs text-gray-500">
                  {review.helpful} personnes ont trouvé cet avis utile
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
