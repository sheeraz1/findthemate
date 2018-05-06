import {FETCH_PUZZLES} from '../actions/types';


var puzzles = [
{ solutions:
    [ 'g2g8 f6f3 b7f3',
      'g2g7 f6f3 b7f3',
      'g2g6 f6f3 b7f3',
      'g2g5 f6f3 b7f3',
      'g2g4 f6f3 b7f3',
      'g2g3 f6f3 b7f3' ],
   _id: '5ae511e58d453c3c6057fa0d',
   fen: '4k2r/1q3p1p/p2RpQ2/2p1P3/8/1P3b2/P4PrP/4R2K b - - 1 25',
   __v: 0 },
 { solutions: [ 'b2a2 a1a2 b6b2' ],
   _id: '5ae511e58d453c3c6057fa0e',
   fen: '4Rnk1/5ppp/1qpb4/3p2P1/p1nP4/2PQ1P2/Nr5P/K3R3 b - - 6 29',
   __v: 0 },
 { solutions: [ 'e2e4 h5h6 e8e5' ],
   _id: '5ae511e58d453c3c6057fa0f',
   fen: '4r1k1/p5bp/1p6/6KP/4P3/8/4r3/8 b - - 0 38',
   __v: 0 },
 { solutions: [ 'e2f3 g3h4 g7g5' ],
   _id: '5ae511e58d453c3c6057fa11',
   fen: '1R6/6pk/pQ2p2p/8/8/5PK1/4q3/5r2 b - - 14 47',
   __v: 0 },
 { solutions: [ 'e1e3 f4f5 g3f3' ],
   _id: '5ae511e58d453c3c6057fa12',
   fen: '5k2/p1p3p1/1p4Pp/3P4/2P2KP1/2P3r1/PPR5/4q3 b - - 3 42',
   __v: 0 },
 { solutions: [ 'f5c2 b1a1 c2a2' ],
   _id: '5ae511e58d453c3c6057fa10',
   fen: 'r3r1k1/pp3ppp/8/1np2qPP/1n1p1P2/5N2/2Q1P1B1/1K1R3R b - - 0 27',
   __v: 0 },
 { solutions: [ 'h2c7 b7a8 c6a6' ],
   _id: '5ae511e58d453c3c6057fa14',
   fen: '8/1k3p2/p1R1pPp1/1r3nPp/7P/Pr3P2/1P5Q/1K6 w - - 1 40',
   __v: 0 },
 { solutions: [ 'e6g6 g7f8 h6h8', 'h6g6 g7h7 e6g8' ],
   _id: '5ae511e58d453c3c6057fa13',
   fen: 'r3n3/pp2p1k1/2ppQ1pR/q5P1/3PPrB1/2N5/1PP2P2/2K5 w - - 1 23',
   __v: 0 },
 { solutions: [ 'h8f6 f7g8 h1h8', 'h1h7 f7g6 h7g7' ],
   _id: '5ae511e58d453c3c6057fa15',
   fen: '7Q/3b1k2/4p3/4Pp2/p2q1P2/2pP4/PrP5/K6R w - - 1 34',
   __v: 0 },
 { solutions: [ 'd3b1 e8e1 b1e1', 'd3d1 e8e1 d1e1' ],
   _id: '5ae511e58d453c3c6057fa16',
   fen: '4Q3/6kp/p7/8/P4P2/3q2bP/6P1/6K1 b - - 2 36',
   __v: 0 },
 { solutions: [ 'd2h6 d6d5 h6h8' ],
   _id: '5ae511e58d453c3c6057fa19',
   fen: 'r2q1rk1/4b3/p2pb1Pp/2p5/2p5/2P2P2/PPPQN3/1K1R3R w - - 0 24',
   __v: 0 },
 { solutions: [ 'b3b7 g4g5 b7a7', 'b3b6 g4g5 b6a6' ],
   _id: '5ae511e58d453c3c6057fa17',
   fen: '1r6/2p2k2/3P1p2/5P2/K4pPp/1r5P/1p6/1R6 b - - 0 42',
   __v: 0 },
 { solutions: [ 'h4f5 h6g5 h2h4' ],
   _id: '5ae511e58d453c3c6057fa18',
   fen: 'r7/pp5p/2p1Q1qk/8/7N/1P3BP1/PBP2P1P/R5K1 w - - 5 24',
   __v: 0 },
 { solutions: [ 'c8b8 h3h4 b5b1' ],
   _id: '5ae511e58d453c3c6057fa1a',
   fen: '2r3k1/5p2/4p1pp/1q1p4/p5P1/P1P4P/K1R5/8 b - - 1 41',
   __v: 0 },
 { solutions: [ 'e1e8 g7f8 h3h7' ],
   _id: '5ae511e58d453c3c6057fa1b',
   fen: '6k1/1b4qp/p5p1/1p3pN1/1P6/P1rP3Q/6PP/4R2K w - - 0 29',
   __v: 0 },
 { solutions: [ 'd8d1 c4f1 d1f1' ],
   _id: '5ae511e58d453c3c6057fa1f',
   fen: '3r2k1/pp3ppp/8/8/2B5/P5P1/5q2/7K b - - 0 30',
   __v: 0 },
 { solutions: [ 'd2d1 g4h4 d1h5', 'd2e2 g4h4 e2h5' ],
   _id: '5ae511e58d453c3c6057fa20',
   fen: '8/pp1Q1pkp/2pp2p1/8/5PK1/6P1/PP1q1r1P/8 b - - 3 34',
   __v: 0 },
 { solutions:
    [ 'b2b5 c1d1 b5b1',
      'b2b4 c1d1 b4b1',
      'b2b3 c1d1 b3b1',
      'b2a2 c1d1 a2a1',
      'd4c3 c1d1 b2b1',
      'd4h8 c1d1 b2b1',
      'd4f6 c1d1 b2b1',
      'b6b5 c1d1 b2b1',
      'e4e3 c1d1 b2b1' ],
   _id: '5ae511e58d453c3c6057fa1c',
   fen: '8/7p/1p2p2P/5p2/3bpP2/3k4/1r6/2K5 b - - 6 46',
   __v: 0 },
 { solutions: [ 'd6e6 g8h8 e6c8' ],
   _id: '5ae511e58d453c3c6057fa1d',
   fen: '2r3k1/pp4pp/3Q1p2/5P2/3Pp3/BP2n2P/P3q1PK/8 w - - 0 28',
   __v: 0 },
 { solutions: [ 'c3c2 d1e1 c2c1q' ],
   _id: '5ae511e58d453c3c6057fa1e',
   fen: '8/5p2/6pp/8/4N2P/1npp1P2/6k1/3K4 b - - 1 47',
   __v: 0 },
 { solutions: [ 'b2a2 a1b1 c2b2' ],
   _id: '5ae511e58d453c3c6057fa21',
   fen: '8/p3kp1p/5p2/3R4/8/P3P3/1rr2PPP/K1R5 b - - 6 27',
   __v: 0 },
 { solutions: [ 'h7h6 g5f4 g6g5' ],
   _id: '5ae511e58d453c3c6057fa24',
   fen: '8/p5kp/1p2pRp1/3pPbK1/1P1P4/r7/8/8 b - - 1 47',
   __v: 0 },
 { solutions: [ 'a8f8 g3g4 e3f2', 'e3e1 f2f1 e1g3' ],
   _id: '5ae511e58d453c3c6057fa25',
   fen: 'r6k/6p1/pp6/3p3r/P7/1P2q1P1/2P2R2/6K1 b - - 0 31',
   __v: 0 },
 { solutions: [ 'f7f6 h6h7 f6g7' ],
   _id: '5ae511e58d453c3c6057fa22',
   fen: 'r7/1b3Q2/pp3p1k/2p5/4PP2/2B5/PPP2q1P/1K1R4 w - - 4 30',
   __v: 0 },
 { solutions: [ 'g6g2 e2g2 c8c1', 'c8c1 e2e1 c1e1' ],
   _id: '5ae511e58d453c3c6057fa23',
   fen: '2r3k1/1p1P2pp/pQ4q1/3b4/3B4/4pp2/P3R1PP/6K1 b - - 0 34',
   __v: 0 },
 { solutions: [ 'e3h3 h1g1 h3h1', 'h8h3 h1g2 h3h2' ],
   _id: '5ae511e58d453c3c6057fa26',
   fen: '7r/p4kp1/3p1r2/3p1N2/P2PpPn1/2P1q2Q/8/RN3R1K b - - 2 28',
   __v: 0 },
 { solutions: [ 'b3b2 e3e4 b2b1q', 'd3c2 d1e2 d2d1q' ],
   _id: '5ae511e58d453c3c6057fa27',
   fen: 'b3B2k/7p/5bnP/3p4/3P1B2/1p1qPQ2/3p1P2/3K2R1 b - - 1 35',
   __v: 0 },
 { solutions: [ 'c5f2 g3h3 f2h2' ],
   _id: '5ae511e58d453c3c6057fa28',
   fen: '5r2/1Qp3k1/6p1/2q2BNp/4pPn1/1P4K1/P1P4P/8 b - - 0 27',
   __v: 0 },
 { solutions: [ 'b8b1 c4f1 b1f1' ],
   _id: '5ae511e58d453c3c6057fa29',
   fen: '1r4k1/4pp2/3p2pp/2pPb3/2Q1PN2/p3P3/6PP/7K b - - 0 32',
   __v: 0 },
 { solutions: [ 'd3a6 g6g5 e7b7' ],
   _id: '5ae511e58d453c3c6057fa2a',
   fen: '1k6/4Q3/np4p1/2p5/8/1P1B4/2P2PP1/1KR5 w - - 2 36',
   __v: 0 },
 { solutions: [ 'e5c7 d8e8 c7e7', 'e5d6 f6d7 g7g8', 'e5f6 d8e8 f6e7' ],
   _id: '5ae511e58d453c3c6057fa2e',
   fen: 'r2k4/6R1/b3pn2/1p1pQ3/1p6/8/NPP5/1K6 w - - 2 39',
   __v: 0 },
 { solutions: [ 'c5e7 c3c4 c6d4', 'a2a6 b5c5 f4d3', 'c6a7 b5c5 b7b6' ],
   _id: '5ae511e58d453c3c6057fa2f',
   fen: '2kr3r/1pp3R1/2n4p/1Kb5/1P3nN1/2P5/q2B4/3R4 b - - 1 29',
   __v: 0 },
 { solutions: [ 'h6h3 h2g1 h3g2' ],
   _id: '5ae511e58d453c3c6057fa2b',
   fen: '5rk1/ppp3pp/2p1p2q/8/4Pn2/3P2NP/PPP1QP1K/3R3R b - - 0 21',
   __v: 0 },
 { solutions: [ 'a1a2 e2e1 b3b1' ],
   _id: '5ae511e58d453c3c6057fa2c',
   fen: '8/5p1k/1p3ppP/3n2P1/8/1r6/4K3/q7 b - - 0 46',
   __v: 0 },
 { solutions: [ 'd1d8 a8d8 c7d8' ],
   _id: '5ae511e58d453c3c6057fa2d',
   fen: 'r3k3/1NQ2p2/p4p2/4p3/2P2b1p/q7/P4P2/3RR1K1 w q - 0 30',
   __v: 0 },
 { solutions: [ 'f4f5 g6h6 g5f7' ],
   _id: '5ae511e58d453c3c6057fa33',
   fen: 'r6r/1p4pp/2qb1nk1/1p4N1/4pP2/8/PP2Q1PP/R1B2RK1 w - - 4 20',
   __v: 0 },
 { solutions: [ 'g2g3 h4h3 c5h5' ],
   _id: '5ae511e58d453c3c6057fa34',
   fen: '8/8/8/2R4p/7k/5K2/5PP1/8 w - - 0 40',
   __v: 0 },
 { solutions: [ 'f7f8 b8f8 f6f8' ],
   _id: '5ae511e58d453c3c6057fa30',
   fen: '1r5k/p1b2Qpp/1pB2R2/1P6/3P4/4P1P1/1q5P/R5K1 w - - 0 29',
   __v: 0 },
 { solutions: [ 'b3b2 g1h1 b2b1q' ],
   _id: '5ae511e58d453c3c6057fa31',
   fen: '2k5/1p6/4p3/4P3/3p3p/1p1P2pP/5r2/6K1 b - - 3 39',
   __v: 0 },
 { solutions: [ 'c1c8 e7e8 c8e8' ],
   _id: '5ae511e58d453c3c6057fa32',
   fen: '2b3k1/p3rp1p/5p1B/6p1/8/6P1/P4P1P/2R3K1 w - - 2 38',
   __v: 0 },
 { solutions: [ 'h8c8 d7e7 c1c7' ],
   _id: '5ae511e58d453c3c6057fa35',
   fen: '7Q/3k1ppp/3p1b2/3P4/1P3n2/5N2/P4PPP/2R2bK1 w - - 0 23',
   __v: 0 },
 { solutions: [ 'e1b1 b2a3 e3b3' ],
   _id: '5ae511e58d453c3c6057fa36',
   fen: '8/8/2p2kp1/p4b2/P7/1P2r3/1K2N1RR/4q3 b - - 5 40',
   __v: 0 },
 { solutions: [ 'e6c4 f3e2 h2g1' ],
   _id: '5ae511e58d453c3c6057fa38',
   fen: '3r2k1/ppp2p1p/4b3/8/3N2P1/2P2Q1n/1P5q/R3RK2 b - - 1 29',
   __v: 0 },
 { solutions: [ 'e7g7 g8h8 f1f8' ],
   _id: '5ae511e58d453c3c6057fa37',
   fen: '5rk1/Q3R1pp/6b1/2p5/2Pp4/1P1P4/P5PP/5RK1 w - - 4 32',
   __v: 0 },
 { solutions:
    [ 'a3b2 h2h3 b2d2',
      'a3e3 h2h3 e3d2',
      'a3a4 d1c1 a4c2',
      'a3d3 d1c1 d3c2',
      'a3b3 d1c1 b3c2' ],
   _id: '5ae511e58d453c3c6057fa39',
   fen: '6k1/5p1p/3p2pb/2pP4/2Pp1P2/q5P1/r3N1BP/3KR3 b - - 7 34',
   __v: 0 },
 { solutions: [ 'f5g6 h7h8 g6h6' ],
   _id: '5ae511e58d453c3c6057fa3d',
   fen: 'r1b2r2/1p1n3k/p1nqBppp/P2p1Q2/1P1p3N/2P3P1/3N1PP1/R3R1K1 w - - 0 22',
   __v: 0 },
 { solutions: [ 'c3c2 d1e1 c2c1' ],
   _id: '5ae511e58d453c3c6057fa3a',
   fen: '8/Pp2k2p/8/8/8/2qp1P2/P4P1P/3K4 b - - 0 34',
   __v: 0 },
 { solutions: [ 'f3e3 d7c5 e3c5' ],
   _id: '5ae511e58d453c3c6057fa3b',
   fen: 'r4r2/pp1n2bp/1kp2n2/8/1PB2B2/2P2Q2/P4PPP/5RK1 w - - 1 25',
   __v: 0 },
 { solutions: [ 'h2d6 d8c8 d3f5' ],
   _id: '5ae511e58d453c3c6057fa3c',
   fen: 'r2k1r2/pp2R3/2p2PR1/q1Pp4/3P4/2PBP3/P6Q/1K6 w - - 7 32',
   __v: 0 },
 { solutions: [ 'd7d1 h1d1 d8d1' ],
   _id: '5ae511e58d453c3c6057fa3e',
   fen: '1k1r3r/3q4/1bp5/6pP/B5n1/1Q2n1N1/1PP5/2K4R b - - 2 30',
   __v: 0 },
 { solutions: [ 'g6f7 g8h8 f7g7' ],
   _id: '5ae511e58d453c3c6057fa42',
   fen: 'r5k1/pp2Rrp1/5nQp/8/8/1P6/1P3PPP/R5K1 w - - 9 28',
   __v: 0 },
 { solutions: [ 'd6a6 a2b1 a6a1' ],
   _id: '5ae511e58d453c3c6057fa43',
   fen: '8/P3R3/3q2k1/3B1bp1/1P6/2q5/K1PR4/8 b - - 2 46',
   __v: 0 },
 { solutions: [ 'f4h6 h3g3 h6h4' ],
   _id: '5ae511e58d453c3c6057fa3f',
   fen: 'r4k2/pp3b1p/5pn1/3p4/5qP1/4RP1K/6B1/4R3 b - - 4 39',
   __v: 0 },
 { solutions: [ 'e8e6 b2f6 e6f6' ],
   _id: '5ae511e58d453c3c6057fa40',
   fen: '4R3/pp3p1p/1bp1n2k/7P/5PQ1/1P4P1/Pq6/5R1K w - - 3 36',
   __v: 0 },
 { solutions: [ 'e6f7 g8h7 g7g8q', 'e6e8 g8h7 g7g8q' ],
   _id: '5ae511e58d453c3c6057fa41',
   fen: '4r1k1/2R2nP1/p3Q2p/1p5N/8/8/PP3PP1/4R1K1 w - - 5 38',
   __v: 0 },
 { solutions: [ 'g5h6 f6g7 h6g7' ],
   _id: '5ae511e58d453c3c6057fa44',
   fen: 'r3rk2/pb2qp1Q/1pn2bB1/2p1p1B1/3P4/2P4P/PP3PP1/R4RK1 w - - 6 21',
   __v: 0 },
 { solutions: [ 'd6f4 g4h5 f4g5' ],
   _id: '5ae511e58d453c3c6057fa45',
   fen: '8/8/p2Qb3/8/6kP/1P4P1/P1P4K/8 w - - 1 34',
   __v: 0 },
 { solutions: [ 'g4h3 h7g7 h3h6', 'g4h5 h7g7 h5h6', 'g4h4 h7g7 h4h6' ],
   _id: '5ae511e58d453c3c6057fa47',
   fen: 'rn4q1/pb1pnr1k/1p2pp2/2p5/3PP1Q1/2PB4/P1PB1PPP/R4RK1 w - - 6 16',
   __v: 0 },
 { solutions: [ 'f4h2 g1h1 h5g3' ],
   _id: '5ae511e58d453c3c6057fa48',
   fen: '6rk/3b3p/3p4/6qn/3p1bN1/Pp1P1B1P/1Pr5/4RRK1 b - - 3 36',
   __v: 0 },
 { solutions: [ 'c3c6 c8d8 b5b8' ],
   _id: '5ae511e58d453c3c6057fa46',
   fen: '2K5/p5pp/2NPk3/1r2Pp2/5P1P/P1r3P1/8/8 b - - 3 44',
   __v: 0 },
 { solutions: [ 'f1e1 h8g8 e1e8' ],
   _id: '5ae511e58d453c3c6057fa49',
   fen: '7k/2R5/7B/8/pP1P2P1/P7/5PP1/5RK1 w - - 0 31',
   __v: 0 },
 { solutions: [ 'c1h6 f8f7 h8g7' ],
   _id: '5ae511e58d453c3c6057fa4a',
   fen: 'r2q1knQ/pp2p2p/n2p1pp1/1BpP4/4P3/8/PPP2PPP/R1B1K2R w KQ - 0 12',
   __v: 0 },
 { solutions: [ 'g3b8 d2d8 b8d8' ],
   _id: '5ae511e58d453c3c6057fa4b',
   fen: '5k2/R7/5pp1/1P6/2p4p/2P2BQP/1P1q1rPK/8 w - - 2 35',
   __v: 0 },
 { solutions: [ 'h5h3 g4h2 h3g2' ],
   _id: '5ae511e58d453c3c6057fa4c',
   fen: 'r5k1/4b1pp/3p4/1NpP3q/4pnN1/1Q3P1P/1PPB1P2/5R1K b - - 2 23',
   __v: 0 },
 { solutions: [ 'd3d4 a1b1 d4b2', 'd3c3 a1b1 c3b2', 'a3b2 a1a2 c6b4' ],
   _id: '5ae511e58d453c3c6057fa4d',
   fen: '6k1/p1Q2pp1/2n4p/8/7P/b2q4/3r1P2/K3R3 b - - 1 25',
   __v: 0 },
 { solutions: [ 'c6b4 h4h5 c4c1' ],
   _id: '5ae511e58d453c3c6057fa4e',
   fen: '7r/kp6/p1n2p2/6p1/2q2bPP/5P2/1P6/1K6 b - - 1 34',
   __v: 0 },
 { solutions: [ 'f1f4 g4h5 f4h4' ],
   _id: '5ae511e58d453c3c6057fa4f',
   fen: '8/5Np1/5n2/3p1P2/3Rn1kp/6P1/1r5P/5RK1 w - - 0 41',
   __v: 0 },
 { solutions: [ 'e6f5 g7g5 b3f7' ],
   _id: '5ae511e58d453c3c6057fa50',
   fen: '2r5/Pb4pp/4Q3/5n1k/3q2NP/1B4P1/1P3P2/R5K1 w - - 1 38',
   __v: 0 },
 { solutions: [ 'f4f2 h2h3 g8g4' ],
   _id: '5ae511e58d453c3c6057fa51',
   fen: '6q1/kpQ5/2b1p3/4Pp2/p2p1r1P/6P1/7K/1R6 b - - 1 43',
   __v: 0 },
 { solutions: [ 'c1b2 e2e1 b2f2', 'c1c2 e2e1 c2d1', 'e4d3 e2d3 c1c2' ],
   _id: '5ae511e58d453c3c6057fa52',
   fen: '6k1/1p1n1rb1/p5RQ/6Np/3pp2P/1b1P4/1P2KP2/2q3R1 b - - 6 30',
   __v: 0 },
 { solutions: [ 'c7e5 h6h5 f7g7' ],
   _id: '5ae511e58d453c3c6057fa56',
   fen: '8/2B2Qbk/p5Np/3p4/3P2p1/7P/5PP1/6K1 w - - 0 38',
   __v: 0 },
 { solutions:
    [ 'f1c1 d2e2 d5c4',
      'f1d1 d2c3 g1d4',
      'g1d4 d2c2 f8f2',
      'g1f2 d2c3 f1c4',
      'f8f2 d2e3 f2g2' ],
   _id: '5ae511e58d453c3c6057fa57',
   fen: '5rk1/p5p1/1p6/3b2R1/7P/8/3K4/5qq1 b - - 1 43',
   __v: 0 },
 { solutions:
    [ 'b6b7 h6h5 d4b6',
      'b6c6 h6h5 d4b6',
      'd4e5 h6h5 b6b8',
      'b6b8 d8c7 d4e5',
      'd4f6 d8c7 e6c6' ],
   _id: '5ae511e58d453c3c6057fa53',
   fen: '3k4/8/pR2Q2p/6p1/P1PB4/5P1P/6K1/8 w - - 1 42',
   __v: 0 },
 { solutions: [ 'g6f6 f8g8 h5h8' ],
   _id: '5ae511e58d453c3c6057fa54',
   fen: 'r3rk2/p7/2p1ppQ1/qp1p3R/3P1P2/8/PPP3P1/1K1R4 w - - 0 27',
   __v: 0 },
 { solutions: [ 'f4f1 g6g1 f1g1' ],
   _id: '5ae511e58d453c3c6057fa55',
   fen: '6k1/6p1/4p1Q1/pBbpP3/P1p2q1R/2P5/P6P/7K b - - 0 35',
   __v: 0 },
 { solutions: [ 'f2f1 h4h5 f1g2' ],
   _id: '5ae511e58d453c3c6057fa5b',
   fen: '5rk1/p4ppp/3p4/3Pp3/1P2b2P/P7/5qPK/5B2 b - - 0 34',
   __v: 0 },
 { solutions: [ 'c1h6 g7g8 g4f6' ],
   _id: '5ae511e58d453c3c6057fa5c',
   fen: 'r2q1r2/1b2npk1/1p1p1bp1/p1p1p2p/P3P1N1/2PP1NP1/1P3PBP/2QRR1K1 w - - 0 19',
   __v: 0 },
 { solutions: [ 'g2c2 b1a1 c3a3' ],
   _id: '5ae511e58d453c3c6057fa58',
   fen: '4Q3/8/8/4p1k1/4Pp2/P1r5/6q1/1K2RN2 b - - 6 48',
   __v: 0 },
 { solutions: [ 'h6h7 e8d8 h7h8q' ],
   _id: '5ae511e58d453c3c6057fa59',
   fen: '4k3/5R2/4P2P/8/4P1K1/p5P1/P7/8 w - - 1 44',
   __v: 0 },
 { solutions: [ 'g7h7 h8g8 e7g7' ],
   _id: '5ae511e58d453c3c6057fa5a',
   fen: 'r4r1k/pp2Q1Rp/1qp5/8/2nnP3/2NP4/PP4PP/1R5K w - - 1 20',
   __v: 0 },
 { solutions: [ 'd5e4 h6h5 g6h7', 'd5g8 h6h5 g6h7' ],
   _id: '5ae511e58d453c3c6057fa5d',
   fen: '6rk/pp2R1p1/6Qp/3B4/2P5/8/P4P1P/3R2K1 w - - 5 38',
   __v: 0 },
 { solutions: [ 'e8f7 g8h8 f7f8' ],
   _id: '5ae511e58d453c3c6057fa5e',
   fen: '4Qbk1/6p1/6B1/1p6/4P1qN/2P3P1/1Pr2PKP/8 w - - 3 31',
   __v: 0 },
 { solutions: [ 'f5f6 g7h7 f6h6', 'c6g6 g7h7 g6g8' ],
   _id: '5ae511e58d453c3c6057fa60',
   fen: '6r1/4N1k1/2R4p/5Q2/8/7P/PPP2PPK/8 w - - 3 42',
   __v: 0 },
 { solutions: [ 'b8b2 h5h6 g3f2', 'g3g2 f1e1 d6g3' ],
   _id: '5ae511e58d453c3c6057fa61',
   fen: '1r4k1/5p2/3b2p1/7P/P7/2P2bq1/1P4N1/5K2 b - - 2 43',
   __v: 0 },
 { solutions: [ 'a7e3 e2d1 e3d2' ],
   _id: '5ae511e58d453c3c6057fa65',
   fen: '8/q2b1k2/7b/4P3/8/2P4P/2P1K3/8 b - - 3 39',
   __v: 0 },
 { solutions: [ 'f5h5 h7g8 f6f8' ],
   _id: '5ae511e58d453c3c6057fa66',
   fen: '8/p5Nk/4NR2/3pPR1p/3P4/6P1/1P4KP/q7 w - - 0 42',
   __v: 0 },
 { solutions: [ 'e7c5 g1f1 h2h1' ],
   _id: '5ae511e58d453c3c6057fa5f',
   fen: '4R3/3Pbppk/8/4P2p/1p3P2/6P1/2r4r/R5K1 b - - 6 44',
   __v: 0 },
 { solutions: [ 'c5f2 h3h4 f2g2' ],
   _id: '5ae511e58d453c3c6057fa62',
   fen: '6k1/pp3pp1/2n4p/2q5/2p5/2Pn1NPP/PP1Nr3/R1B4K b - - 8 27',
   __v: 0 },
 { solutions:
    [ 'f2f4 e6f7 e2g4',
      'f6e6 d5e6 f2f5',
      'g7g5 h4g5 f2h2',
      'g7g6 h5h6 f2h4' ],
   _id: '5ae511e58d453c3c6057fa63',
   fen: '7k/6p1/1p1pBr1p/2pP3K/2P1p1PP/8/4bq2/8 b - - 0 39',
   __v: 0 },
 { solutions: [ 'g5e7 g7h6 f8h8' ],
   _id: '5ae511e58d453c3c6057fa64',
   fen: '5R2/6k1/1q4p1/1b1pp1Qp/1p1P4/1P1n3P/5PP1/6K1 w - - 2 40',
   __v: 0 },
 { solutions: [ 'g3h4 h6h5 e7g7', 'e7g7 g6h5 g7g4', 'e7f7 g6g5 h2h4' ],
   _id: '5ae511e58d453c3c6057fa6a',
   fen: '8/1R2Q1p1/5pkp/4p3/4P3/5PK1/r5PP/8 w - - 1 48',
   __v: 0 },
 { solutions: [ 'c5e5 h6h7 e5g7', 'g5g4 h6h7 c5h5' ],
   _id: '5ae511e58d453c3c6057fa6b',
   fen: '8/8/7k/2Q3R1/4p3/4P1Pp/4B2P/6K1 w - - 0 45',
   __v: 0 },
 { solutions: [ 'e7f8 h8h7 f8g7' ],
   _id: '5ae511e58d453c3c6057fa67',
   fen: '5q1k/4Q1p1/3P3p/4Bp2/8/4P3/5PPP/5RK1 w - - 3 40',
   __v: 0 },
 { solutions: [ 'f2g2 g4h4 f3h3' ],
   _id: '5ae511e58d453c3c6057fa68',
   fen: '7k/p3R1p1/1p5p/1PpQ4/2Pp2K1/P2P1r2/5q1P/8 b - - 7 32',
   __v: 0 },
 { solutions: [ 'f5g6 f8g8 a7a8', 'h6h7 f8e8 h7h8q' ],
   _id: '5ae511e58d453c3c6057fa69',
   fen: '5k2/R7/7P/5B2/8/4N1P1/5P2/6K1 w - - 1 48',
   __v: 0 },
 { solutions: [ 'f3f2 h2h3 e3g3', 'f3g3 h2h1 e3e1', 'e3e2 h2h3 f3h5' ],
   _id: '5ae511e58d453c3c6057fa6',
   fen: '6k1/5pp1/4p2P/6p1/8/4rqP1/7K/8 b - - 2 46',
   __v: 0 },
 { solutions: [ 'f3f2 e1d1 f2d2' ],
   _id: '5ae511e58d453c3c6057fa6d',
   fen: '5r1k/pQ4p1/3P4/1BR2P1p/4p1P1/4bq1P/1P1B4/1R2K3 b - - 3 30',
   __v: 0 },
 { solutions: [ 'd4e5 h7h6 f6g7' ],
   _id: '5ae511e58d453c3c6057fa6e',
   fen: '6k1/7p/p4Qp1/3Pr3/1P1Bp3/P6P/3R2PK/8 w - - 3 46',
   __v: 0 },
 { solutions: [ 'f7f1 a1f1 f8f1' ],
   _id: '5ae511e58d453c3c6057fa6f',
   fen: '5r2/2p2r1k/2Pp2p1/PP1Np3/4P1P1/6q1/2Q1R1Pp/R6K b - - 1 36',
   __v: 0 },
 { solutions: [ 'd7f7 g7h8 f7f8' ],
   _id: '5ae511e58d453c3c6057fa70',
   fen: '8/R2Q1pk1/6p1/7p/2pP2nP/5NP1/P1r1rPK1/5R2 w - - 2 38',
   __v: 0 }]


export default function(state=null, action){
	switch (action.type){
		case FETCH_PUZZLES:
			return puzzles;
		default: 
			return state;
	}
}