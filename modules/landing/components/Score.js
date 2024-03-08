const Score = () => (
  <div className="flex space-x-2">
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      <div className="avatar">
        <div className="w-12">
          <img alt="avatar" src="/avatars/1.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img alt="avatar" src="/avatars/2.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img alt="avatar" src="/avatars/3.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img alt="avatar" src="/avatars/4.jpg" />
        </div>
      </div>
    </div>
    <div className="flex flex-col space-y-2">
      <div className="rating">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
      </div>
      <div>5/5 od 100+ klientów</div>
    </div>
  </div>
);

export default Score;
