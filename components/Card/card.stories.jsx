import { Card } from '../..';
import React from 'react';
 
export default {
  title: 'Components/Card',
  component: Card,
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique tempora eveniet quod exercitationem facilis, sunt excepturi ipsum unde dignissimos voluptatum, dolores qui laudantium, tenetur et molestias autem reiciendis. Expedita!',
    post: {
        category: 'Event',
        tags: ['tag1'],
        title: 'Seqera gathering',
        content: {
            excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae? Dicta cum, nostrum et saepe nesciunt asperiores possimus, officiis ex eum, voluptas culpa quis ipsa? Ipsam in illo tempora aut.'
        }
    }
  },
  argTypes: {
    
  },
};

const Template = (args) => <Card {...args}>
    <Card.Content>
        <div className="flex items-center justify-between mb-4">
            <Card.Category>
                {args.post.category}
            </Card.Category>
            <Card.Tags>
                {/* {args.post.tags.map((tag) => (
                    <Tag tag={tag} key={tag} />
                ))} */}
            </Card.Tags>
        </div>
        <Card.Title slug={args.post.slug}>
            {args.post.title}
        </Card.Title>
        <Card.Description>
            {args.post.content.excerpt}
        </Card.Description>
    </Card.Content>
</Card>;

export const Event = Template.bind({});
Event.args = {
  
};
