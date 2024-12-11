配点 : $1100$ 点

## 問題文

英小文字のみからなる文字列が$N$個あります。$i$番目の文字列は$S_i$です。すべての文字列は相異なります。

次の$Q$個のクエリに答えてください。$i$番目のクエリは、以下のような形式です。

クエリ: 整数$k_i$と、{'a','b',...,'z'}の並び替えである文字列$p_{i,1}p_{i,2}...p_{i,26}$が与えられる。文字の順序が$p_{i,1} &lt; p_{i,2} &lt; ... &lt; p_{i,26}$のとき、文字列$S_{k_i}$は$N$個の文字列たちの中で辞書順で何番目か出力せよ。

## 制約

- $1 \leq N,Q \leq 100000$
- $1 \leq | S_i | (1 \leq i \leq N)$
- $S_i (1 \leq i \leq N)$は英小文字のみからなる。
- $| S_i |$たちの合計は$400000$以下。
- $S_i$たちはすべて相異なる。
- $1 \leq k_i \leq N(1 \leq i \leq Q)$
- すべての$1 \leq i \leq Q$に対し、$p_{i,1}p_{i,2}...p_{i,26}$は"abcd...z"の並び替えである。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> :
> 
> $S_N$
> 
> $Q$
> 
> $k_1$ $p_{1,1}p_{1,2}...p_{1,26}$
> 
> :
> 
> $k_Q$ $p_{Q,1}p_{Q,2}...p_{Q,26}$

## 出力

$Q$行出力せよ。

$i$行目には、$i$番目のクエリに対し、文字列$S_{k_i}$は$N$個の文字列たちの中で辞書順で何番目かを表す整数を出力せよ。

```input1
5
aa
abbaa
abbba
aaab
aaaaaba
5
1 abcdefghijklmnopqrstuvwxyz
2 bacdefghijklmnopqrstuvwxyz
3 abcdefghijklmnopqrstuvwxyz
4 bacdefghijklmnopqrstuvwxyz
5 abcdefghijklmnopqrstuvwxyz
```

```output1
1
2
5
4
2
```

文字の順序が"a" &lt; "b"のとき、入力の文字列を辞書順にソートすると"aa","aaaaaba","aaab","abbaa","abbba"となるので、
$1,3,5$番目のクエリにはそれぞれ$1,5,2$と答えます。

また、文字の順序が"b" &lt; "a"のとき、入力の文字列を辞書順にソートすると"abbba","abbaa","aa","aaab","aaaaaba"となるので、
$2,4$番目のクエリにはそれぞれ$2,4$と答えます。

```input2
8
abrakatabra
abadaba
abracadabra
atcoder
grand
contest
ababa
a
6
3 abcdefghijklmnopqrstuvwxyz
6 qwertyuiopasdfghjklzxcvbnm
8 poiuytrewqlkjhgfdsamnbvcxz
2 qazwsxedcrfvtgbyhnujmikolp
1 plokmijnuhbygvtfcrdxeszwaq
4 mnbvcxzasdfghjklpoiuytrewq
```

```output2
4
8
2
3
4
7
```