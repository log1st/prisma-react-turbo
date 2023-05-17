import { Module } from '@nestjs/common';
import { MatchRule } from './constraints/match.rule';

@Module({
  exports: [MatchRule],
  providers: [MatchRule],
})
export class ValidationModule {}
