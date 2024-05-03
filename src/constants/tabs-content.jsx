const RandomComponent = () => {
  return <><h1>Random Content</h1><p>random text. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quam.</p></>;
};

const TABS_CONTENT = [
  {
    label: 'Tab 1',
    content: <div>This is content for tab 1</div>,
  },
  {
    label: 'Tab 2',
    content: <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, delectus! Ullam quidem, eius iusto fugiat ipsa, hic non quam aut quibusdam perspiciatis quasi suscipit reiciendis et porro voluptatem nam perferendis, cum repudiandae ex possimus veritatis exercitationem itaque eveniet? Maiores, sint harum labore ea molestiae beatae. Mollitia provident voluptas aperiam nisi ab, modi eum dolor iste odio magnam omnis incidunt illum voluptatem. Tenetur est iure ea a repellendus explicabo cum quia, praesentium numquam mollitia, expedita, quibusdam perspiciatis! Ipsa optio molestiae quos minima facilis mollitia, dolor deserunt quis, eveniet eligendi natus? Corrupti ut iure incidunt saepe inventore eaque enim! Fuga deserunt atque blanditiis molestiae similique praesentium natus, dolore, amet debitis porro autem exercitationem asperiores quos dolores recusandae omnis quidem nisi corrupti fugiat culpa saepe eveniet.</div>,
  },
  {
    label: 'Tab 3',
    content: <RandomComponent />,
  },
  {
    label: 'Tab 4',
    content: <div>This is content for tab 4</div>,
  },
];

export default TABS_CONTENT;
