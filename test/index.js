'use strict';

var should = require('chai').should();
var orecore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(orecore.crypto);
    should.exist(orecore.encoding);
    should.exist(orecore.util);
    should.exist(orecore.errors);
    should.exist(orecore.Address);
    should.exist(orecore.Block);
    should.exist(orecore.MerkleBlock);
    should.exist(orecore.BlockHeader);
    should.exist(orecore.HDPrivateKey);
    should.exist(orecore.HDPublicKey);
    should.exist(orecore.Networks);
    should.exist(orecore.Opcode);
    should.exist(orecore.PrivateKey);
    should.exist(orecore.PublicKey);
    should.exist(orecore.Script);
    should.exist(orecore.Transaction);
    should.exist(orecore.URI);
    should.exist(orecore.Unit);
  });
});
