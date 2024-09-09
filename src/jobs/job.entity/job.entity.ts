import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('job_listings')
export class JobEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    job_title: string;

    @Column({ length: 100 })
    time_posted: string;

    @Column({ length: 100 })
    job_location: string;

    @Column('text')
    job_description: string;

    @Column('text')
    company_description: string;

    @Column()
    company_profile_url: string;

    @Column()
    company_logo_url: string;

    @Column() // Array for storing icons
    icon_titles: string;

    @Column() // Array for storing categories
    category_names: string;
}
