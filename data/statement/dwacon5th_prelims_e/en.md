MathJax.Hub.Config({
  tex2jax: {skipTags:["script","noscript","style","textarea","code"],inlineMath: [['\\(','\\)']]}
});

Score : $1000$ points

## Problem Statement

Niwango-kun has \(N\) chickens as his pets. The chickens are identified by numbers \(1\) to \(N\), and the size of the \(i\)-th chicken is a positive integer \(a_i\).

\(N\) chickens decided to take each other's hand (wing) and form some cycles. The way to make cycles is represented by a permutation \(p\) of \(1, \ldots , N\). Chicken \(i\) takes chicken \(p_i\)'s left hand by its right hand. Chickens may take their own hand.

Let us define the *cycle* containing chicken \(i\) as the set consisting of chickens \(p_i, p_{p_i}, \ldots, p_{\ddots_i} = i\). It can be proven that after each chicken takes some chicken's hand, the \(N\) chickens can be decomposed into cycles.

The *beauty* \(f(p)\) of a way of forming cycles is defined as the product of the size of the smallest chicken in each cycle.
Let \(b_i \ (1 \leq i \leq N)\) be the sum of \(f(p)\) among all possible permutations \(p\) for which \(i\) cycles are formed in the procedure above.

Find the greatest common divisor of \(b_1, b_2, \ldots, b_N\) and print it \({\rm mod} \ 998244353\).

## Constraints

- \(1 \leq N \leq 10^5\)
- \(1 \leq a_i \leq 10^9\)
- All numbers given in input are integers

## Input

Input is given from Standard Input in the following format:

> \(N\)
> 
> \(a_1\) \(a_2\) \(\ldots\) \(a_N\)

## Output

Print the answer.

```input1
2
4 3
```

```output1
3
```

In this case, \(N = 2, a = [ 4, 3 ]\).

For the permutation \(p = [ 1, 2 ]\), a cycle of an only chicken \(1\) and a cycle of an only chicken \(2\) are made, thus \(f([1, 2]) = a_1 \times a_2 = 12\).

For the permutation \(p = [ 2, 1 ]\), a cycle of two chickens \(1\) and \(2\) is made, and the size of the smallest chicken is \(a_2 = 3\), thus \(f([2, 1]) = a_2 = 3\).

Now we know \(b_1 = f([2, 1]) = 3, b_2 = f([1, 2]) = 12\), and the greatest common divisor of \(b_1\) and \(b_2\) is \(3\).

```input2
4
2 5 2 5
```

```output2
2
```

There are always \(N!\) permutations because chickens of the same size can be distinguished from each other.

The following picture illustrates the cycles formed and their beauties when \(p = (2, 1, 4, 3)\) and \(p = (3, 4, 1, 2)\), respectively.

![bdd8ce0a7db3b4f920b04551c60aa207.png](https://img.atcoder.jp/dwacon5th-prelims/bdd8ce0a7db3b4f920b04551c60aa207.png)