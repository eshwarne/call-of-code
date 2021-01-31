import { Migration } from '@mikro-orm/migrations';

export class Migration20210131133508 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "code_snippets" ("id" serial primary key, "title" text not null, "description" text not null, "code" text not null, "created_at" timestamptz(0) not null);');
  }

}
