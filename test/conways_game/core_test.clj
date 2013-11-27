(ns conways-game.core-test
  (:require [clojure.test :refer :all]
            [conways-game.core :refer :all]))

(def test-inputs
  [".........\n....*....\n...***...\n....*....\n........."])

(def test-outputs
  [".........\n...***...\n...*.*...\n...***...\n........."])

(deftest a-test
  (testing "First pattern"
    (is (=
         (vec-to-string
           (get-nth-position
             (convert-str-to-vec (nth test-inputs 0)) 1))
         (nth test-outputs 0)))))
