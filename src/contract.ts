import { NearBindgen, NearPromise, UnorderedMap, near, call, assert, view , Vector } from 'near-sdk-js';
import { ONE_NEAR } from 'near-sdk-js/lib/types';

@NearBindgen({})
class Requester {
  userAddress: string;
  constructor( userAddress: string) {
      this.userAddress = userAddress;
  }
}

@NearBindgen({})
class Repository {
  url: string;
  userAddress: string;
  constructor( url: string, userAddress: string) {
      this.url = url;
      this.userAddress = userAddress;
  }
  set(repository: Repository) {
    this.url = repository.url;
    this.userAddress = repository.userAddress
  }
}

@NearBindgen({})
class StarterContract {

  repository: Repository = new Repository("https://github.com/JulioMCruz/LaZonaTres-MultichainDeveloperRoad-NearProtocol","JulioMCruz.testnet");
  requesters: Vector<Requester> = new Vector<Requester>('p');

  @call({ payableFunction: true })
  set_url({ url }: { url: string }): void {
    const userAddress = near.signerAccountId();
    const amount = near.attachedDeposit();
    assert(amount >= ONE_NEAR, "Need to paid 1 near in order to set the repo.");
    const repository = new Repository(url, userAddress);
    this.repository.set(repository);
    near.log("Repository values set.");
  }

  @call({ payableFunction: true })
  get_repository() {
    const userAddress = near.signerAccountId();
    const amount = near.attachedDeposit();
    const requester = new Requester(userAddress)
    assert(amount >= ONE_NEAR, "Need to paid 1 near in order to get the repo information.");
    this.requesters.push(requester);
    return this.repository;
  }

  @view({})
  get_requesters() {
    return this.requesters.toArray();
  }

}