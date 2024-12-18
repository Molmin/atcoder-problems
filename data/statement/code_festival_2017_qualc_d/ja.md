配点 : $700$ 点

## 問題文

英小文字のみからなる文字列 $s$ があります。
すぬけ君は、$s$ をいくつかの空でない部分文字列へ分割しようとしています。
分割後の部分文字列を、左から順に $s_1$, $s_2$, $...$, $s_N$ とします (このとき、$s = s_1 + s_2 + ... + s_N$ です)。
すぬけ君は、次の条件が成り立つように $s$ を分割しようとしています。

- 各 $i$ ($1 \leq i \leq N$) について、$s_i$ の文字を並べ替えて回文が得られる。

条件が成り立つように $s$ を分割するとき、$N$ の最小値を求めてください。

## 制約

- $1 \leq |s| \leq 2 \times 10^5$
- $s$ は英小文字のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $s$

## 出力

条件が成り立つように $s$ を分割するとき、$N$ の最小値を求めよ。

```input1
aabxyyzz
```

```output1
2
```

`aabxyyzz` = `aab` + `xyyzz` と分割すればよいです。
このとき、`aab` の文字を並べ替えて回文 `aba` が得られ、`xyyzz` の文字を並べ替えて回文 `zyxyz` が得られます。

```input2
byebye
```

```output2
1
```

`byebye` の文字を並べ替えて回文 `byeeyb` が得られます。

```input3
abcdefghijklmnopqrstuvwxyz
```

```output3
26
```

```input4
abcabcxabcx
```

```output4
3
```

`abcabcxabcx` = `a` + `b` + `cabcxabcx` と分割すればよいです。