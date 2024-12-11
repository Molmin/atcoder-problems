Score : $500$ points

## Problem Statement

You are given $N$ strings $S _ 1,S _ 2,\ldots,S _ N$.
$S _ i\ (1\leq i\leq N)$ is a non-empty string of length at most $10$ consisting of lowercase English letters, and the strings are pairwise distinct.

Taro the First and Jiro the Second play a word-chain game.
In this game, the two players take alternating turns,
with Taro the First going first.
In each player's turn, the player chooses an integer $i\ (1\leq i\leq N)$,
which should satisfy the following two conditions:

- $i$ is different from any integer chosen by the two players so far since the game started;
- the current turn is the first turn of the game, or the last character of $S_j$ equals the first character of $S_i$, where $j$ is the last integer chosen.

The player who is unable to choose a conforming $i$ loses; the other player wins.

Determine which player will win if the two players play optimally.

## Constraints

- $1 \leq N \leq 16$
- $N$ is an integer.
- $S _ i\ (1\leq i\leq N)$ is a non-empty string of length at most $10$ consisting of lowercase English letters.
- $S _ i\neq S _ j\ (1\leq i\lt j\leq N)$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print `First` if Taro the First wins when the two players play optimally; print `Second` if Jiro the Second wins.

```input1
6
enum
float
if
modint
takahashi
template
```

```output1
First
```

For example, the game progresses as follows.
Note that the two players may not be playing optimally in this example.

- Taro the First chooses $i=3$.  $S _ i=$`if`.
- Jiro the Second chooses $i=2$.  $S _ i=$`float`, and the last character of `if` equals the first character of `float`.
- Taro the First chooses $i=5$.  $S _ i=$`takahashi`, and the last character of `float` equals the first character of `takahashi`.
- Jiro the Second is unable to choose $i\neq2,3,5$ such that $S _ i$ starts with `i`, so he loses.

In this case, Taro the First wins.

```input2
10
catch
chokudai
class
continue
copy
exec
havoc
intrinsic
static
yucatec
```

```output2
Second
```

```input3
16
mnofcmzsdx
lgeowlxuqm
ouimgdjxlo
jhwttcycwl
jbcuioqbsj
mdjfikdwix
jhvdpuxfil
peekycgxco
sbvxszools
xuuqebcrzp
jsciwvdqzl
obblxzjhco
ptobhnpfpo
muizaqtpgx
jtgjnbtzcl
sivwidaszs
```

```output3
First
```