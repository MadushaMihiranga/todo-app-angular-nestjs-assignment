import { Controller, Get, Param } from '@nestjs/common';
import { StatusService } from './status.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Status } from './entities/status.entity';
//import { CreateStatusDto } from './dto/create-status.dto';
//import { UpdateStatusDto } from './dto/update-status.dto';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOkResponse({ type: Status, isArray: true })
  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOkResponse({ type: Status, description: 'Find a Status Item By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  /*@Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }*/
}
