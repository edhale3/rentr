create extension if not exists "uuid-ossp";

create table if not exists posts (
    posts_id uuid default uuid_generate_v4(),
    post_title varchar (100) not null,
    post_price varchar(50) not null,
    description varchar(1000) not null,
    city_location varchar(300) not null,
    state_location varchar(300) not null,
    latitude decimal not null,
    longitude decimal not null,
    image_url varchar(200) not null,
    category varchar(100) not null,
    unit_of_rental varchar(100) not null,
    date_of_post timestamp with time zone default current_timestamp,
    PRIMARY KEY(posts_id)
)

