Score : $500$ points

## Problem Statement

As a token of his gratitude, Takahashi has decided to give Snuke a level-$K$ palindrome. A level-$L$ palindrome, where $L$ is a non-negative integer, is defined as follows:

- Let $\mathrm{rev}(s)$ denote the reversal of a string $s$.
- A string $s$ is said to be a palindrome when $s = \mathrm{rev}(s)$.
- The empty string and a string that is not a palindrome are level-$0$ palindromes.
- For any **non-empty** level-$(L-1)$ palindrome $t$, the concatenation of $t, \mathrm{rev}(t)$ in this order is a level-$L$ palindrome.
- For any level-$(L-1)$ palindrome $t$ and any character $c$, the concatenation of $t, c, \mathrm{rev}(t)$ in this order is a level-$L$ palindrome.

Now, Takahashi has a string $S$.
Determine whether it is possible to make $S$ an exactly level-$K$ palindrome by doing the following action zero or more times: choose a character in $S$ and change it to another lowercase English letter. If it is possible, find the minimum number of changes needed to make $S$ a level-$K$ palindrome.

## Constraints

- $K$ is an integer.
- $0 \leq K \leq 5 \times 10^5$
- $S$ consists of lowercase English letters.
- $1 \leq |S| \leq 5 \times 10^5$

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $S$

## Output

If it is possible to get an exactly level-$K$ palindrome, print the minimum number of changes needed.
If it is impossible, print `impossible`.

```input1
4
aabaaaabaa
```

```output1
0
```

We can find the level of `aabaaaabaa` as follows:

- the empty string is a level-$0$ palindrome;
- `a` is a concatenation of (empty string), `a`, (empty string) in this order, so it is a level-$1$ palindrome;
- `aa` is a concatenation of `a`, `a` in this order, so it is a level-$2$ palindrome;
- `aabaa` is a concatenation of `aa`, `b`, `aa` in this order, so it is a level-$3$ palindrome;
- `aabaaaabaa` is a concatenation of `aabaa`, `aabaa` in this order, so it is a level-$4$ palindrome.

Thus, `aabaaaabaa` is already a level-$4$ palindrome and needs no changes.

```input2
2
aabaaaabaa
```

```output2
4
```

We can, for example, change `aabaaaabaa` to `acbcaacbca` to get a level-$2$ palindrome.

Note that `aabaaaabaa` is not a level-$2$ palindrome.

```input3
3
aabaaaabaa
```

```output3
impossible
```

```input4
5
aabaaaabaa
```

```output4
impossible
```

```input5
2
acaabcbababaaac
```

```output5
6
```