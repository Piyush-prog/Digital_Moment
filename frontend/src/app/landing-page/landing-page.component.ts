import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { ChallengesService } from '../services/challenges.service';
import { IdeasService } from '../services/ideas.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  trendingChallenges: IPost[] = [];
  trendingIdeas: IPost[] = [];
  user: IUser | undefined;

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly challengesService : ChallengesService,
    private readonly ideasService : IdeasService
    ) {
    this.trendingChallenges = this.challengesService.getTrendingChallenges().splice(0, 3);
    this.trendingIdeas = this.ideasService.getTrendingIdeas().splice(0, 3);
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  navigateToChallenges(){
    this.router.navigate(['challenges'])
    .then(() => {
      window.location.reload()
    });
  }
  navigateToIdeas(){
    this.router.navigate(['ideas'])
    .then(() => {
      window.location.reload()
    });
  }

}
