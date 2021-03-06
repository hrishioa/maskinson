let hashmasks = {
  startingIndex: 10141,
  ABI: JSON.parse(`[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"nctAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"maskIndex","type":"uint256"},{"indexed":false,"internalType":"string","name":"newName","type":"string"}],"name":"NameChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"HASHMASKS_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFT_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NAME_CHANGE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"newName","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isMintedBeforeReveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"nameString","type":"string"}],"name":"isNameReserved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfNfts","type":"uint256"}],"name":"mintNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"toLower","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenNameByIndex","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"validateName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`),
  address: "0xc2c747e0f7004f9e8817db2ca4997657a7746928"
}

let nct = {
  ABI: JSON.parse(`[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"emissionStartTimestamp","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_ALLOTMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRE_REVEAL_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_IN_A_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenIndex","type":"uint256"}],"name":"accumulated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnQuantity","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIndices","type":"uint256[]"}],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emissionEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionPerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenIndex","type":"uint256"}],"name":"lastClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"masksAddress","type":"address"}],"name":"setMasksAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`),
  address: "0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e"
}

let users = {

}

$(window).on('load', () => {
  console.log("Enabling...");
  window.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/52af32445ffa42c98cfa76c3ed62cf2d'));
  console.log("Enabled.");
  loadContracts();
  $(".loading-message").hide();
  $('.input-area').show();
  let urlPieces = window.location.href.split("?");
  if(urlPieces.length > 1)
    loadFromInput(urlPieces[urlPieces.length-1], true);
})

class AsyncQueue {
  constructor(intervalMs) {
    this.queue = [];
    this.index = 0;
    this.running = false;
    this.intervalMs = intervalMs;
  }

  add(asyncFunction, doNotStart, retries) {
    let thisQueue = this;
    return new Promise((resolve, reject) => {
      let job = {
        task: () => {
          asyncFunction().then(value => resolve(value)).catch(err => reject(err));
        }
      };

      if(retries && retries !== 0) {
        job = {
          task: () => {
            asyncFunction().then(value => resolve(value)).catch(err => {
              return thisQueue.add(asyncFunction, doNotStart, retries-1).then(val => resolve(val)).catch(err => reject(err));
            });
          }
        }
      }

      this.queue.push(job);
      if(!doNotStart && !this.interval)
        this.start();
    })
  }

  decorator(asyncFunction, doNotStart, retries) {
    let thisQueue = this;
    return function () {
      return thisQueue.add(() => asyncFunction.apply(this, arguments), doNotStart, retries);
    }
  }

  runNext() {
    var thisQueue = this;
    return () => {
      if(thisQueue.index < thisQueue.queue.length) {
        thisQueue.index++;
        if(thisQueue.index >= thisQueue.queue.length)
          thisQueue.stop();
        thisQueue.queue[thisQueue.index-1].task();
      }
    }
  }

  start() {
    if(this.interval)
      throw Error ("Queue has already started");
    this.interval = setInterval(this.runNext(), this.intervalMs);
  }

  stop() {
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

// if(window.ethereum) {
//   console.log("Enabling...");
//   window.web3 = new Web3(window.ethereum);

//   window.ethereum.enable().then(() => {
//     console.log("Enabled.");
//     loadContracts();
//     $(".loading-message").hide();
//     $('.input-area').show();
//     let urlPieces = window.location.href.split("?");
//     if(urlPieces.length > 1)
//       loadFromInput(urlPieces[urlPieces.length-1], true);
//   })
// } else {
//   appendToResults("No metamask detected.", false);
// }

function loadContracts() {
  hashmasks.contract = new window.web3.eth.Contract(hashmasks.ABI, hashmasks.address);
  nct.contract = new window.web3.eth.Contract(nct.ABI, nct.address);

  nct.contract.methods.decimals().call().then(decimals => {
    nct.decimals = parseFloat(decimals);
  })
}

let openseaQueue = new AsyncQueue(250);
let maskQueue = new AsyncQueue(50);

async function loadOpenSea(maskId, retries) {
  try {
    let response = await openseaQueue.add(() => fetch(`https://api.opensea.io/api/v1/asset/0xc2c747e0f7004f9e8817db2ca4997657a7746928/${maskId}`));

    let mask = await response.json();

    if(mask.detail && mask.detail.match(/throttled/i) && retries > 0)
      return await loadOpenSea(maskId, retries-1);

    if(mask.success === false)
      return false;

    let maskos = {
      lastSale: processSale(mask.last_sale),
      ownerName: mask.owner && mask.owner.user && mask.owner.user.username || null,
      orders: mask.orders && mask.orders.map(processOrder)
    };

    return maskos;
  } catch(err) {
    console.log("Error getting opensea for mask ",maskId," - ",err);
    return null;
  }
}

function timeoutPromise(func, timeout) {
  console.log("Running timeout for ",timeout);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => { // TODO: Add a catch handler later
      resolve(func());
    }, timeout)
  })
}


function processOrder(order) {
  let pOrder = { // TODO: Find out how to recognize other types of orders
    from: order.maker && ((order.maker.user && order.maker.user.username) || (order.maker.address)) || "Unknown",
    fromLink: order.maker && order.maker.address && `https://opensea.io/accounts/${order.maker.address}` || null,
    usdValue: (parseFloat(order.current_price)/(10**parseFloat(order.payment_token_contract.decimals)))*parseFloat(order.payment_token_contract.usd_price),
    tokenValue: (parseFloat(order.current_price)/(10**parseFloat(order.payment_token_contract.decimals))),
    tokenName: order.payment_token_contract.symbol,
    createdDate: new Date(order.created_date)
  }

  return pOrder;
}

function processSale(lastSale) {
  if(!lastSale)
    return false;

  let pSale = {};

  pSale.date = new Date(lastSale.event_timestamp);
  pSale.timestamp = pSale.date.getTime();

  pSale.usdValue = (parseFloat(lastSale.total_price)/(10**parseFloat(lastSale.payment_token.decimals)))*parseFloat(lastSale.payment_token.usd_price);
  pSale.tokenValue = (parseFloat(lastSale.total_price)/(10**parseFloat(lastSale.payment_token.decimals)));
  pSale.tokenName = lastSale.payment_token.symbol;
  if(lastSale.transaction && lastSale.transaction.transaction_hash) {
    pSale.txHash = lastSale.transaction.transaction_hash;
    pSale.txLink = `https://etherscan.io/tx/${lastSale.transaction.transaction_hash}`;
  }
  pSale.from = lastSale.transaction && lastSale.transaction.from_account &&
    ((lastSale.transaction.from_account.user && lastSale.transaction.from_account.user.username) || lastSale.transaction.from_account.address);
  pSale.fromLink = lastSale.transaction.from_account && lastSale.transaction.from_account.address && `https://opensea.io/accounts/${lastSale.transaction.from_account.address}` || null;
  pSale.collectedDate = new Date();

  return pSale;
}

async function loadOwned(address) {
  if(!window.web3.utils.isAddress(address))
    return appendToResults("Invalid address", false);

  if(!users[address])
    users[address] = {
      masks: {},
    }

  try {
    let nftCount = await hashmasks.contract.methods.balanceOf(address).call();

    nftCount = parseInt(nftCount);

    if(isNaN(nftCount))
      return appendToResults("Invalid number of NFTs retrieved.");

    let maskPromises = [];

    for(let i=0;i<nftCount;i++) {
      maskPromises.push(loadMaskFromUser(address, i));
      // await loadMaskFromUser(address, i);
    }

    await Promise.all(maskPromises);

    console.log("Got ",nftCount,"NFTs.");
    appendToResults("Loaded "+nftCount+" Masks.", true);
  } catch(err) {
    console.log("Error getting owned hashmasks - ",err);
    appendToResults("Could not load owned hashmasks. Please check console for details.");
  }
}

async function loadMaskFromUser(userAddress, userMaskIndex) {
  // console.log("Loading mask ",userMaskIndex," for owner ", userAddress);
  let maskId = await hashmasks.contract.methods.tokenOfOwnerByIndex(userAddress, userMaskIndex).call();
  maskId = parseInt(maskId);
  // console.log("Got mask id ",maskId);

  if(!users[userAddress]) {
    users[userAddress] = {};
  }

  await loadMask(userAddress, maskId);
}

async function loadMaskFromId(maskId) {
  let userAddress = await hashmasks.contract.methods.ownerOf(maskId).call();

  if(!window.web3.utils.isAddress(userAddress))
    return appendToResults("Invalid owner for mask "+maskId);

  if(!users[userAddress])
    users[userAddress] = {};

  loadMask(userAddress, maskId);

  appendToResults("Loaded Mask "+maskId+".", true);
}

function getMaskData(maskId) {
  return new Promise((resolve, reject) => {
    $.get(`/assets/resources/maskdata/${maskId}.json`, data => {
      resolve(data);
    }).fail(() => reject());
  });
}

async function loadMask(userAddress, maskId) {
  // console.log("Loading mask from ",`/assets/resources/maskdata/${maskId}.json`,"...");

  if(!users[userAddress].masks) {
    users[userAddress].masks = {};
  }

  if(users[userAddress].masks[maskId]) {
    return; // Maybe change later?
  }

  let maskData = await getMaskData(maskId);

  users[userAddress].masks[maskId] = {
    maskId,
  };

  users[userAddress].masks[maskId].name = await hashmasks.contract.methods.tokenNameByIndex(maskId).call();

  users[userAddress].masks[maskId].unclaimedNCT = parseFloat(await nct.contract.methods.accumulated(maskId).call())/10**(nct.decimals ? nct.decimals : 18);

  users[userAddress].masks[maskId].attributes = maskData;

  await showMask(userAddress, maskId);
}

function sortMasks() {
  let maskSection = $('.masks-section'), masks = maskSection.find('.mask');
  [].sort.call(masks, function(a,b) {
    return +$(a).data('TotalPRank') - +$(b).data('TotalPRank');
  });
  masks.each(function(){
    maskSection.append(this);
  });
}

async function showMask(userAddress, maskId, retried) {
  if(!users || !users[userAddress] || !users[userAddress].masks || !users[userAddress].masks[maskId]) {
    if(!retried) {
      console.log("Loading");
      await loadMaskFromId(maskId);
      return await showMask(userAddress, maskId, true);
    } else {
      console.log("Attempted to load ",arguments," before mask is in dict.");
      return appendToResults("Attempted to show unloaded mask.");
    }
  }

  let mask = $('.mask-template').clone().removeClass('mask-template').addClass('mask');

  let maskdata = users[userAddress].masks[maskId];

  mask.data('TotalPRank', maskdata.attributes.TotalPPercentileRank);

  let img = new Image();
  let mainImgLoaded = false;
  img.onload = function() {
    mask.find('.mask-img').attr("src", maskdata.attributes.ImageLink);
    mainImgLoaded = true;
  }
  img.src = maskdata.attributes.ImageLink;

  let maskIndex = (maskId+10141) % (16384);

  let imgbackup = new Image();
  imgbackup.onload = function() {
    if(!mainImgLoaded)
      mask.find('.mask-img').attr("src", `https://hashmasksstore.blob.core.windows.net/hashmaskspreview/${maskIndex}.png`);
  }
  imgbackup.src = `https://hashmasksstore.blob.core.windows.net/hashmaskspreview/${maskIndex}.png`;

  let maskTitle = `${maskdata.attributes.SkinName} skinned, ${maskdata.attributes.EyesName} eyed ${maskdata.attributes.CharacterName} ${maskdata.attributes.MaskName}${maskdata.attributes.ItemName && maskdata.attributes.ItemName !== "No Item" ? ` with ${maskdata.attributes.ItemName}` : ""}`;

  if(maskdata.name)
    maskTitle = `${maskdata.name} (${maskTitle})`

  mask.find('.mask-title').html(maskTitle);

  mask.find('.mask-id').html(maskId);

  mask.find('.mask-link').attr('href', `https://www.thehashmasks.com/detail/${maskId}`);

  mask.find('.mask-owner-link').attr('href', `https://etherscan.io/address/${userAddress}`);
  mask.find('.mask-opensea-link').attr('href', `https://opensea.io/assets/0xc2c747e0f7004f9e8817db2ca4997657a7746928/${maskId}`);

  mask.find('.mask-rarity').html(`${maskdata.attributes.TotalPPercentileRank+1}th (${getZeroes(maskdata.attributes.TotalP*100)} zeroes)`);

  mask.find('.mask-rarity-text').html(`This mask is ${maskdata.attributes.TotalP*100}% common (${getZeroes(maskdata.attributes.TotalP*100)} zeroes) and ranked ${maskdata.attributes.TotalPPercentileRank}th (rank 1 is the rarest).`);

  mask.find('.mask-attribute-template').clone().removeClass('mask-attribute-template').addClass('mask-attribute').html(`${maskdata.attributes.SkinName} skinned is ${maskdata.attributes.SkinP*100.0}% common.`).insertBefore(mask.find('.mask-attribute-template')).show();
  mask.find('.mask-attribute-template').clone().removeClass('mask-attribute-template').addClass('mask-attribute').html(`${maskdata.attributes.EyesName} eyes are ${maskdata.attributes.EyesP*100.0}% common.`).insertBefore(mask.find('.mask-attribute-template')).show();
  mask.find('.mask-attribute-template').clone().removeClass('mask-attribute-template').addClass('mask-attribute').html(`${maskdata.attributes.CharacterName}s are ${maskdata.attributes.CharacterP*100.0}% common.`).insertBefore(mask.find('.mask-attribute-template')).show();
  mask.find('.mask-attribute-template').clone().removeClass('mask-attribute-template').addClass('mask-attribute').html(`${maskdata.attributes.MaskName} masks are ${maskdata.attributes.MaskP*100.0}% common.`).insertBefore(mask.find('.mask-attribute-template')).show();

  mask.find('.mask-unclaimed-ncts').html(`Unclaimed: ${maskdata.unclaimedNCT.toFixed(2)} NCT`).show();

  mask.find('.mask-last-sale-content').hide();
  mask.find('.mask-orders-content').hide();

  let openseaData = maskdata.openseaData && Promise.resolve(mask.data.openseaData) || loadOpenSea(maskId, 5);

  openseaData.then(osData => {
    console.log("Loaded openseadata for mask ",maskId);

    maskdata.openseaData = osData;

    if(maskdata.openseaData && maskdata.openseaData.lastSale) {
      mask.find('.mask-last-sale-data .order-link').html(maskdata.openseaData.lastSale.from.slice(0,6)+"...");
      mask.find('.mask-last-sale-data .order-link').attr('href', maskdata.openseaData.lastSale.fromLink);
      mask.find('.mask-last-sale-data .order-amount').html(`${parseFloat(maskdata.openseaData.lastSale.tokenValue).toFixed(2)} ${maskdata.openseaData.lastSale.tokenName}`)
      mask.find('.mask-last-sale-meta').html(`${parseFloat(maskdata.openseaData.lastSale.usdValue).toFixed(2)} USD (${maskdata.openseaData.lastSale.date.toLocaleDateString()})`);
      mask.find('.mask-last-sale-content').show();
    }

    if(maskdata.openseaData && maskdata.openseaData.orders && maskdata.openseaData.orders.length) {
      maskdata.openseaData.orders.map(order => {
        let orderElement = mask.find('.mask-order-data-template')
                                .clone()
                                .removeClass('mask-order-data-template')
                                .addClass('mask-order-data')
                                .addClass('mask-orders-content')
                                .insertBefore(mask.find('.mask-order-data-template'));

        orderElement.find('.order-link').html(order.from.slice(0,6)+"...");
        orderElement.find('.order-link').attr('href', order.fromLink);
        orderElement.find('.order-amount').html(`${parseFloat(order.tokenValue).toFixed(2)} ${order.tokenName}`)
        orderElement.find('.mask-order-meta').html(`${parseFloat(order.usdValue).toFixed(2)} USD (${order.createdDate.toLocaleDateString()})`);

        orderElement.show();
      });

      mask.find('.mask-orders-content').show();
    }
  })

  if(maskdata.attributes.ItemName && maskdata.attributes.ItemName !== "No Item")
    mask.find('.mask-attribute-template').clone().removeClass('mask-attribute-template').addClass('mask-attribute').html(`${maskdata.attributes.ItemName}s are ${maskdata.attributes.ItemP*100.0}% common.`).insertBefore(mask.find('.mask-attribute-template')).show();

  mask.insertBefore('.mask-template').show();
  sortMasks();
}

function showOpenSea() {

}

function getZeroes(number) {
  for(let i=0;i<50;i++) {
    if(number >= 1)
      return i;
    number *= 10.0;
  }
  return 1000;
}

function handleKeyPress(e){
  var key=e.keyCode || e.which;
   if (key==13){
      loadFromInput();
   }
 }

async function loadFromInput(inputVal, silent) {
  try {
    console.log("Trying to load ",inputVal," with silent = ",silent);

    if(!inputVal)
      inputVal = $('#inputVal').val();

    if(window.web3.utils.isAddress(inputVal)) {
      appendToResults("Loading all masks for "+inputVal+"...", true);
      return await loadOwned(inputVal);
    }

    inputVals = inputVal.replace(/\s/g, '').split(",");
    inputVals.map(iV => parseFloat(iV)).filter(iV => !isNaN(iV)).filter(iV => iV >= 0 && iV <= 16384);

    for(let i=0;i<inputVals.length;i++)
      maskQueue.add(() => loadMaskFromId(inputVals[i]));

    // inputVal = parseInt(inputVal);

    // if(isNaN(inputVal) || inputVal < 0 || inputVal > 16384)
    //   if(!silent)
    //     return appendToResults("Invalid input");
    //   else
    //     return;

    // appendToResults("Loading mask "+inputVal+"...", true);
    // await loadMaskFromId(inputVal);
  } catch(err) {
    console.log("Error loading masks - ",err);
    if(!silent)
      appendToResults("Error loading, please try again or check the console for details.");
  }
}

function appendToResults(data, success) {
  document.getElementById("results").innerHTML = data+`\n<hr class="my-0 border border-${success ? "success": "danger"}"/>\n`+document.getElementById("results").innerHTML;
}