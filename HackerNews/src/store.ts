import { NewsComment, NewsFeed } from './types';

class Store {
    private feeds: NewsFeed[];
    private _currentPage: number;
    constructor() {
        this.feeds = [];
        this._currentPage = 1;
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(page: number) {
        if(page <= 0) return;
        this._currentPage = page;
    }

    get nextPage(): number {
        return this._currentPage + 1;
    }

    get prevPage(): number {
        return this._currentPage > 1 ? this._currentPage -1 : 1;
    }

    get numberOfFeed():number {
        return this.feeds.length;
    }

    get hasFeeds(): boolean {
        return this.feeds.length > 0;
    }

    getAllFeeds(): NewsFeed[] {
        return this.feeds;
    }

    getFeed(postion: number): NewsFeed {
        return this.feeds[postion];
    }

    setFeeds(feeds: NewsFeed[]): void {
        this.feeds.map(feed => ({
            ...feed,
            read: false
        }));
    }

    makeRead(id: number): void {
        const feed = this.feeds.find((feed: NewsComment) => feed.id === id);

        if(feed) {
            feed.read = true;
        }
    }
}