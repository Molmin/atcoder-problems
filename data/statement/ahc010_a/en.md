## Story

Takahashi, who loves loop lines, is playing with a toy train.
As shown in the figure below, this toy consists of square tiles containing railroad lines.
By rotating the tiles, he can connect lines and play with toy trains running on the lines.
Because Takahashi has two toy trains, please create two large loop lines as much as possible.

Initial State.

After rotating the top-right tile and the middle-right tile.

## Problem Statement

You are given tiles containing railroad lines arranged in a 30 x 30 square.
There are 8 types of tiles by distinguishing rotations which are numbered as follows.

<svg height="70" id="vis" viewBox="-5 -5 250 70" width="250" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="70" width="250" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="120" x2="120" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="150" x2="150" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="180" x2="180" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="210" x2="210" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="240" x2="240" y1="0" y2="60"></line>
<text font-size="22" text-anchor="middle" x="15" y="55">
0
</text>
<text font-size="22" text-anchor="middle" x="45" y="55">
1
</text>
<text font-size="22" text-anchor="middle" x="75" y="55">
2
</text>
<text font-size="22" text-anchor="middle" x="105" y="55">
3
</text>
<text font-size="22" text-anchor="middle" x="135" y="55">
4
</text>
<text font-size="22" text-anchor="middle" x="165" y="55">
5
</text>
<text font-size="22" text-anchor="middle" x="195" y="55">
6
</text>
<text font-size="22" text-anchor="middle" x="225" y="55">
7
</text>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail2" stroke="silver" x="0" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,45,15)" x="30" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,75,15)" x="60" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,105,15)" x="90" y="0"></use>
<use href="#rail2" stroke="silver" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,165,15)" x="150" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,165,15)" x="150" y="0"></use>
<use href="#rail1" stroke="silver" transform="rotate(90,195,15)" x="180" y="0"></use>
<use href="#rail1" stroke="silver" x="210" y="0"></use>
</svg>

Tiles 0 to 3 contain one curved line, tiles 4 and 5 contain two curved lines, and tiles 6 and 7 contain one straight line.
Each tile can be rotated every 90 degrees.
By rotating a tile 90 degrees counterclockwise, the tile will become as follows.

<svg height="70" id="vis" viewBox="-5 -5 250 70" width="250" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="70" width="250" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="120" x2="120" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="150" x2="150" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="180" x2="180" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="210" x2="210" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="240" x2="240" y1="0" y2="60"></line>
<text font-size="22" text-anchor="middle" x="15" y="55">
1
</text>
<text font-size="22" text-anchor="middle" x="45" y="55">
2
</text>
<text font-size="22" text-anchor="middle" x="75" y="55">
3
</text>
<text font-size="22" text-anchor="middle" x="105" y="55">
0
</text>
<text font-size="22" text-anchor="middle" x="135" y="55">
5
</text>
<text font-size="22" text-anchor="middle" x="165" y="55">
4
</text>
<text font-size="22" text-anchor="middle" x="195" y="55">
7
</text>
<text font-size="22" text-anchor="middle" x="225" y="55">
6
</text>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail2" stroke="silver" transform="rotate(270,15,15)" x="0" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,45,15)" x="30" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,75,15)" x="60" y="0"></use>
<use href="#rail2" stroke="silver" x="90" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" x="150" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,165,15)" x="150" y="0"></use>
<use href="#rail1" stroke="silver" x="180" y="0"></use>
<use href="#rail1" stroke="silver" transform="rotate(90,225,15)" x="210" y="0"></use>
</svg>

Since there are no branches on the lines, each line is part of a path or cycle.
A set of lines forming a cycle is called a "loop line," and its length is defined as the number of times to move from a tile to its adjacent tile in a round trip along the loop line.
For example, the loop line below consists of 7 tiles, but its length is 8 because it passes through the center tile twice.

<svg height="100" id="vis" viewBox="-5 -5 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="100" width="100" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="90" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="90"></line>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail1" stroke="silver" x="0" y="0"></use>
<use href="#rail2" stroke="silver" x="30" y="0"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,45,15)" x="30" y="0"></use>
</g>
<g>
<use href="#rail2" stroke="brown" transform="rotate(270,75,15)" x="60" y="0"></use>
</g>
<use href="#rail2" stroke="silver" x="0" y="30"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,15,45)" x="0" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="30" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,45,45)" x="30" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="60" y="30"></use>
</g>
<use href="#rail2" stroke="silver" transform="rotate(270,15,75)" x="0" y="60"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(90,15,75)" x="0" y="60"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="30" y="60"></use>
</g>
<use href="#rail2" stroke="silver" transform="rotate(180,45,75)" x="30" y="60"></use>
<use href="#rail2" stroke="silver" x="60" y="60"></use>
</svg>

Your task is to determine the number of times to rotate each tile.

## Scoring

Let $L_1$ be the length of the longest loop line obtained by rotating the tiles according to the output, and $L_2$ be the length of the second longest one ($L_1=L_2$ if there is more than one longest one).
Then, you will get a score of $L_1\times L_2$.
If the number of loop lines is less than or equal to $1$, the score for that test case is $0$.

There are 100 test cases, and the score of a submission is the total score for each test case. If you get a result other than AC for one or more test cases, the score of the submission will be zero. The highest score obtained during the contest time will determine the final ranking, and there will be no system test after the contest. If more than one participant gets the same score, the ranking will be determined by the submission time of the submission that received that score.

Hints on how to compute the length of a loop line.

Pseudo code has been updated.

You can compute the length of a loop line, for example, as follows.
Let `tiles` be a two-dimensional array containing the tile states.
By numbering the directions 0, 1, 2, 3 in order of left, up, right, and down, the change in coordinates is represented by the arrays `di = [0, -1, 0, 1]` and `dj = [-1, 0, 1, 0]`.
When a train enters a tile of state `t` from its adjacent tile in direction `d`, let `to[t][d]` be the direction to the next tile, or `-1` if the train cannot enter from such a direction, then we obtain the following two-dimensional array.

```plain
to = [
    [1, 0, -1, -1],
    [3, -1, -1, 0],
    [-1, -1, 3, 2],
    [-1, 2, 1, -1],
    [1, 0, 3, 2],
    [3, 2, 1, 0],
    [2, -1, 0, -1],
    [-1, 3, -1, 1],
];
```

When a train enters tile at position `(i, j)` from its adjacent tile in direction `d`, you can update these variables as follows.

```plain
d2 = to[tiles[i][j]][d]; // Direction to the next tile
if (d2 == -1) return 0; // The line is broken.
i += di[d2];
j += dj[d2];
if (i < 0 || i >= 30 || j < 0 || j >= 30) return 0; // The line is broken.
d = (d2 + 2) % 4; // Direction to the previous tile.
```

After repeating this process until the train returns to its initial position and direction (note that it may pass through the same tile twice), the number of iterations is the length of the loop line.

```plain
// Suppose that a train enters a tile (si, sj) from direction sd.
i = si;
j = sj;
d = sd;
length = 0;
loop {
    d2 = to[tiles[i][j]][d];
    if (d2 == -1) return 0;
    i += di[d2];
    j += dj[d2];
    if (i < 0 || i >= 30 || j < 0 || j >= 30) return 0;
    d = (d2 + 2) % 4;
    length += 1;
    if (i == si && j == sj && d == sd) return length;
}
```

## Input

Input is given from Standard Input in the following format:

> $t_{0,0}$ $\cdots$ $t_{0,29}$
> 
> $\vdots$
> 
> $t_{29,0}$ $\cdots$ $t_{29,29}$

Each $t_{i,0}\cdots t_{i,29}$ is a string of $30$ characters.
Let $(i,j)$ denote the $i$-th $(0\leq i\leq 29)$ tile from the top and $j$-th $(0\leq j\leq 29)$ tile from the left.
Then, $t_{i,j}$ is an integer between $0$ and $7$ representing the state of the tile $(i, j)$.

## Output

Let $r_{i,j}$ ($0\leq r_{i,j}\leq 3$) be the number of times the tile $(i,j)$ is rotated 90 degrees counterclockwise.
Output a string of length $900$ such that the $30i+j$-th character is $r_{i,j}$ in one line to Standard Output.

[Show example](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.html?lang=en&amp;show=example)

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

Each $t_{i,j}$ is independently generated as follows.

- With probability 25%, $t_{i,j}=\mathrm{rand}(0, 3)$.
- With probability 50%, $t_{i,j}=\mathrm{rand}(4, 5)$.
- With probability 25%, $t_{i,j}=\mathrm{rand}(6, 7)$.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.html?lang=en): This is more powerful than the local version and can display animations.
- [Local version](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

<font color="red">**Sharing visualization results is not allowed until the end of the contest. **</font>

```input1
436204751575440756541724746755
347475575404531645424640344414
556644445442451553264555436757
761235545455474254546631467555
356447405421445153457656535564
014274425356522445253477726464
311765446655556346633757446600
471744514426443445162555525455
616053450444473274742055767455
254124557527462423444450075637
046546764557475436717475255501
752005462554554414031525515356
452524742177476245065554577605
664465643742341605007655253777
444571276444165545442447340356
435050335454565235025507452540
467560030465475447567644441426
735730577745561712541450443547
472675153755474445700540444544
507472724556677621365747544757
535177720776402476665547676174
636275455643650141456764547131
164624553536572554544165746536
521574724335644274433544442556
576732703453654464555315065544
656244747015464523316444145414
555646775254464367454454067475
665624154657072514445150474444
570004746554540445465051654541
635504417414262014475547424275
```

```output1
000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```