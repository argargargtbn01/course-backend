import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractAuditingEntity {
  @CreateDateColumn({
    name: 'created_date',
  })
  createdDate: Date;

  @UpdateDateColumn({
    name: 'last_modified_date',
  })
  lastModifiedDate: Date;
}
